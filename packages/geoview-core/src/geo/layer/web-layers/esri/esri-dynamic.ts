import axios from 'axios';

import { TileArcGISRest } from 'ol/source';
import { Tile as TileLayer } from 'ol/layer';

import { DynamicMapLayer, DynamicMapLayerOptions, dynamicMapLayer, mapService as esriMapService, MapService } from 'esri-leaflet';

import { getXMLHttpRequest } from '../../../../core/utils/utilities';
import {
  AbstractWebLayersClass,
  CONST_LAYER_TYPES,
  TypeDynamicLayer,
  TypeJsonObject,
  TypeJsonArray,
  TypeLegendJsonDynamic,
  toJsonObject,
  TypeBaseWebLayersConfig,
} from '../../../../core/types/cgpv-types';

import { api } from '../../../../app';

/* ******************************************************************************************************************************
 * Type Gard function that redefines a TypeBaseWebLayersConfig as a TypeDynamicLayer
 * if the layerType attribute of the verifyIfLayer parameter is ESRI_DYNAMIC. The type ascention
 * applies only to the the true block of the if clause that use this function.
 *
 * @param {TypeBaseWebLayersConfig} polymorphic object to test in order to determine if the type ascention is valid
 *
 * @return {boolean} true if the type ascention is valid
 */
export const layerConfigIsEsriDynamic = (verifyIfLayer: TypeBaseWebLayersConfig): verifyIfLayer is TypeDynamicLayer => {
  return verifyIfLayer.layerType === CONST_LAYER_TYPES.ESRI_DYNAMIC;
};

/* ******************************************************************************************************************************
 * Type Gard function that redefines an AbstractWebLayersClass as an EsriDynamic
 * if the type attribute of the verifyIfWebLayer parameter is ESRI_DYNAMIC. The type ascention
 * applies only to the the true block of the if clause that use this function.
 *
 * @param {AbstractWebLayersClass} polymorphic object to test in order to determine if the type ascention is valid
 *
 * @return {boolean} true if the type ascention is valid
 */
export const webLayerIsEsriDynamic = (verifyIfWebLayer: AbstractWebLayersClass): verifyIfWebLayer is EsriDynamic => {
  return verifyIfWebLayer.type === CONST_LAYER_TYPES.ESRI_DYNAMIC;
};

/**
 * a class to add esri dynamic layer
 *
 * @exports
 * @class EsriDynamic
 */
export class EsriDynamic extends AbstractWebLayersClass {
  // layer from leaflet
  layer: TileLayer<TileArcGISRest> | null = null;

  // mapService property
  mapService: MapService;

  /**
   * Initialize layer
   * @param {string} mapId the id of the map
   * @param {TypeDynamicLayer} layerConfig the layer configuration
   */
  constructor(mapId: string, layerConfig: TypeDynamicLayer) {
    super(CONST_LAYER_TYPES.ESRI_DYNAMIC, layerConfig, mapId);

    const entries = layerConfig.layerEntries.map((item) => item.index);
    this.entries = entries?.filter((item) => !Number.isNaN(item));

    this.mapService = esriMapService({
      url: api.geoUtilities.getMapServerUrl(this.url),
    });
  }

  /**
   * Add a ESRI dynamic layer to the map.
   *
   * @param {TypeDynamicLayer} layer the layer configuration
   * @return {Promise<TileLayer<TileArcGISRest> | null>} layers to add to the map
   */
  add(layer: TypeDynamicLayer): Promise<TileLayer<TileArcGISRest> | null> {
    const data = getXMLHttpRequest(`${layer.url[api.map(this.mapId).getLanguageCode()]}?f=json`);

    const geo = new Promise<TileLayer<TileArcGISRest> | null>((resolve) => {
      data.then((value) => {
        if (value !== '{}') {
          // get layers from service and parse layer entries as number
          const { layers } = toJsonObject(JSON.parse(value));

          // check if the entries are part of the service
          if (
            layers &&
            (layers as TypeJsonArray).find((item) => {
              const searchedItem = item.id as number;
              return (this.entries as number[])?.includes(searchedItem);
            })
          ) {
            // const feature = dynamicMapLayer({
            //   url: layer.url[api.map(this.mapId).getLanguageCode()],
            //   layers: this.entries,
            //   attribution: '',
            // } as DynamicMapLayerOptions);

            const feature = new TileLayer({
              source: new TileArcGISRest({
                url: layer.url[api.map(this.mapId).getLanguageCode()],
              }),
            });

            resolve(feature);
          } else {
            resolve(null);
          }
        } else {
          resolve(null);
        }
      });
    });

    return geo;
  }

  /**
   * Get metadata of the current service
   *
   @returns {Promise<TypeJsonValue>} a json promise containing the result of the query
   */
  getMetadata = async (): Promise<TypeJsonObject> => {
    // const feat = featureLayer({
    //   url: this.url,
    // });
    // return feat.metadata(function (error, metadata) {
    //   return metadata;
    // });
    const response = await fetch(`${this.url}?f=json`);
    const result: TypeJsonObject = await response.json();

    return result;
  };

  /**
   * Get legend configuration of the current layer
   *
   * @returns {TypeJsonValue} legend configuration in json format
   */
  getLegendJson = (): Promise<TypeJsonArray> => {
    let queryUrl = this.url.substr(-1) === '/' ? this.url : `${this.url}/`;
    queryUrl += 'legend?f=pjson';

    const feat = dynamicMapLayer({
      url: this.url,
      layers: this.entries,
      attribution: '',
    });

    return axios.get<TypeJsonObject>(queryUrl).then<TypeJsonArray>((res) => {
      const { data } = res;
      const entryArray: TypeJsonArray = feat.getLayers();

      if (entryArray.length > 0) {
        const result = (data.layers as TypeJsonArray).filter((item) => {
          return entryArray.includes(item.layerId) as TypeJsonArray;
        });
        return result as TypeJsonArray;
      }
      return data.layers as TypeJsonArray;
    });
  };

  /**
   * Set Layer Opacity
   * @param {number} opacity layer opacity
   */
  setOpacity = (opacity: number) => {
    this.layer?.setOpacity(opacity);
  };

  /**
   * Fetch the bounds for an entry
   *
   * @param {number} entry
   * @returns {TypeJsonValue} the result of the fetch
   */
  private getEntry = async (entry: number): Promise<TypeLegendJsonDynamic> => {
    const response = await fetch(`${this.url}/${entry}?f=json`);
    const meta = await response.json();

    return meta;
  };

  /**
   * Get bounds through external metadata
   *
   * @returns {Promise<L.LatLngBounds>} layer bounds
   */
  getBounds = async (): Promise<L.LatLngBounds> => {
    const bounds = L.latLngBounds([]);
    if (this.entries) {
      (this.entries as number[]).forEach(async (entry: number) => {
        const meta = await this.getEntry(entry);

        const { xmin, xmax, ymin, ymax } = meta.extent;
        bounds.extend([
          [ymin, xmin],
          [ymax, xmax],
        ]);
      });
    }

    return bounds;
  };

  /**
   * Sets Layer entries to toggle sublayers
   *
   * @param entries MapServer layer IDs
   */
  setEntries = (entries: number[]) => {
    // TODO
    // this.layer!.options.layers = entries;
    // this.layer!.redraw();
  };
}

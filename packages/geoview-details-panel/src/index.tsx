/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Cast,
  AbstractPluginClass,
  TypePluginOptions,
  TypeButtonPanel,
  toJsonObject,
  TypeIconButtonProps,
  TypePanelProps,
  TypeWindow,
} from 'geoview-core';
import { payloadBaseClass } from 'geoview-core/src/api/events/payloads/payload-base-class';
import PanelContent from './panel-content';

const w = window as TypeWindow;

/**
 * Create a class for the plugin instance
 */
class DetailsPlugin extends AbstractPluginClass {
  // store the created button panel object
  buttonPanel: TypeButtonPanel | null;

  constructor(id: string, props: TypePluginOptions) {
    super(id, props);
    this.buttonPanel = null;
  }

  /**
   * translations object to inject to the viewer translations
   */
  translations = toJsonObject({
    'en-CA': {
      detailsPanel: 'Details',
      nothing_found: 'Nothing found',
      click_map: 'Choose a point on the map to start',
      action_back: 'Back',
    },
    'fr-CA': {
      detailsPanel: 'Détails',
      nothing_found: 'Aucun résultat',
      click_map: 'Choisissez un point sur la carte pour commencer',
      action_back: 'Retour',
    },
  });

  /**
   * Added function called after the plugin has been initialized
   */
  added = (): void => {
    const { mapId } = this.pluginProps;

    // access the cgpv object from the window object
    const { cgpv } = w;

    // access the api calls
    const { api, ui } = cgpv;
    const { DetailsIcon } = ui.elements;
    const { language } = api.map(mapId);

    // button props
    const button: TypeIconButtonProps = {
      // set ID to detailsPanel so that it can be accessed from the core viewer
      id: 'detailsPanelButton',
      tooltip: this.translations[language].detailsPanel as string,
      tooltipPlacement: 'right',
      children: <DetailsIcon />,
      visible: true,
    };

    // panel props
    const panel: TypePanelProps = {
      title: this.translations[language].detailsPanel,
      icon: '<i class="material-icons">details</i>',
      width: 300,
    };

    // create a new button panel on the appbar
    this.buttonPanel = api.map(mapId as string).appBarButtons.createAppbarPanel(button, panel, null);

    // set panel content
    this.buttonPanel?.panel?.changeContent(<PanelContent buttonPanel={this.buttonPanel} mapId={mapId as string} />);
  };

  /**
   * Function called when the plugin is removed, used for clean up
   */
  removed(): void {
    const { mapId } = this.pluginProps;

    // access the cgpv object from the window object
    const { cgpv } = w;

    // access the api calls
    const { api } = cgpv;

    if (this.buttonPanel) {
      api.map(mapId as string).appBarButtons.removeAppbarPanel(this.buttonPanel.id);
      api.event.emit(payloadBaseClass(api.eventNames.MARKER_ICON.EVENT_MARKER_ICON_HIDE, mapId));
    }
  }
}

export default DetailsPlugin;

w.plugins = w.plugins || {};
w.plugins['details-panel'] = Cast<AbstractPluginClass>(DetailsPlugin);

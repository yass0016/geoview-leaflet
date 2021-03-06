import { useContext } from 'react';
import { api } from '../../../../app';
import { Button, ZoomOutIcon } from '../../../../ui';
import { MapContext } from '../../../app-start';

/**
 * Zoom out button properties
 */
interface ZoomOutProps {
  className?: string;
  iconClassName?: string;
}

/**
 * default properties values
 */
const defaultProps = {
  className: '',
  iconClassName: '',
};

/**
 * Create a zoom out button
 *
 * @param {ZoomOutProps} props the zoom out button properties
 * @returns {JSX.Element} return the new created zoom out button
 */
export default function ZoomOut(props: ZoomOutProps): JSX.Element {
  const { className, iconClassName } = props;

  const mapConfig = useContext(MapContext);

  const mapId = mapConfig.id;

  /**
   * Causes the map to zoom out
   */
  function zoomOut() {
    const { map } = api.map(mapId);

    const currentZoom = map.getView().getZoom();

    if (currentZoom) map.getView().animate({ zoom: currentZoom - 0.5, duration: 500 });
  }

  return (
    <Button
      id="zoomOut"
      type="icon"
      tooltip="mapnav.zoomOut"
      tooltipPlacement="left"
      icon={<ZoomOutIcon />}
      onClick={() => zoomOut()}
      className={className}
      iconClassName={iconClassName}
    />
  );
}

ZoomOut.defaultProps = defaultProps;

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

const noop = () => {};

export const map = new Map({
  basemap: "gray-vector"
});

export const mapView = new MapView({
  map: map,
  zoom: 3
});

export const initialize = (container) => {
  mapView.container = container;
  mapView
    .when()
    .then(_ => {
      console.log('Map and View are ready');
    })
    .catch(noop);
    return () => {
      mapView.Container = null
    }
}

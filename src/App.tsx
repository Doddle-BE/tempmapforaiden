import { supported } from '@mapbox/mapbox-gl-supported';
import maplibregl from 'maplibre-gl';
import Map from 'react-map-gl';

const maplibreglWithSupported = { ...maplibregl, supported };

import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  return (
    <>
      <h1>Test my map</h1>
      <Map
        initialViewState={{
          latitude: 51.05,
          longitude: 3.71667,
          zoom: 10
        }}
        mapLib={maplibreglWithSupported}
        style={{ width: 800, height: 600 }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      />


    </>
  )
}

export default App
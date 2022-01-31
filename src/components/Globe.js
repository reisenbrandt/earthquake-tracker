import React, { useEffect, useRef } from 'react';
// import Map from '@arcgis/core/Map';
// import MapView from '@arcgis/core/views/MapView';
import './globe.css';

export default function Globe() {
  const elementRef = useRef();

  useEffect(() => {
    import('../data/app').then(
      app => app.initialize(elementRef.current)
    )
  }, [])

return (
  <div className="globeContainer" ref={elementRef}>
  </div>
  );
}

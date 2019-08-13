import React, { useState } from 'react';

import { GeocodingInput } from './GeocodingInput'
import { LeafletMapF } from '../maps/LeafletMapF';

const INITIAL_MAP_CENTER = { lat: 28.462664409289054, lng: -16.260967254638672 };
const INITIAL_MAP_ZOOM = 15;

const FAKE_POINTS = [
  { lat: 28.509521714628573, lng: -16.184921264648438 },
  { lat: 28.462815321479674, lng: -16.262447834014893 },
  INITIAL_MAP_CENTER,
];


export const InputAndMap = () => {
  const [mapCenter, setMapCenter] = useState(INITIAL_MAP_CENTER);
  const [mapZoom, setMapZoom] = useState(INITIAL_MAP_ZOOM);
  const [fakeCounter, setFakeCounter] = useState(-1);

  const handleOnSelectLocation = (lat, lng) => {
    const newMapCenter = { lat, lng };
    console.log('🗺️ Move map to...', newMapCenter);
    setMapCenter(newMapCenter);
  };

  const test = () => {
    let newCounter = fakeCounter + 1;
    if (newCounter >= FAKE_POINTS.length) {
      newCounter = 0;
    }
    setFakeCounter(newCounter);
    const fakePoint = FAKE_POINTS[newCounter];
    handleOnSelectLocation(fakePoint.lat, fakePoint.lng);
  };

  return <div>
    <button onClick={test}>Test change map location</button>
    <GeocodingInput page="mainmap"onSelectLocation={handleOnSelectLocation} />
    <LeafletMapF {...mapCenter} zoom={mapZoom} />
  </div>;
};

import React, {Component, useState} from 'react'
import { GeocodingInput } from '../geocoding/GeocodingInput';
import LeafletMap from '../maps/LeafletMap';


const initialMapProps = {
    coords: [-16, 28],
    zoom: 10
};

export const MapAndInput = () => {

    const [mapProps, setMapProps] = useState(initialMapProps);
    
    return (
    
    <div>
        <LeafletMap/>
        <GeocodingInput/>
    </div>
    )

}
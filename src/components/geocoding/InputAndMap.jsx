import React, {useState} from 'react';

import {GeocodingInput} from './GeocodingInput'
import LeafletMap from '../maps/LeafletMap';


export const InputAndMap = () => {


    const [results, setResults] = useState();

   
    const returnInputValue = (results) =>{
        setResults({
          results
        })
    }

    
    if (results){

        return (
            <div>
                <LeafletMap lat = {results.results.location.lat} lng = {results.results.location.lng} zoom = {13}/>
                <GeocodingInput parentCallback = {returnInputValue}/>
            </div>
            );
    }else {
        return (
            <div>
                <LeafletMap lat = {23} lng = {-16} zoom = {13}/>
                <GeocodingInput parentCallback = {returnInputValue}/>
            </div>
            );
    }

    

}

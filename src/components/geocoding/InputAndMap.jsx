import React, {useState} from 'react';

import {GeocodingInput} from './GeocodingInput'
import {LeafletMapF} from '../maps/LeafletMapF';


export const InputAndMap = () => {


    const [results, setResults] = useState();


   
    const returnInputValue = (results) =>{
        
        setResults({
          results
        });

    }

    
    if (results[0]){
        console.log(results.results.location.lat);
        console.log(results.results.location.lng);
        return (
            <div>
                <GeocodingInput parentCallback = {returnInputValue}/>
                <LeafletMapF  lat = {results.results.location.lat} lng = {results.results.location.lng} zoom = {13}/>
                
            </div>
            );
    }else {
        return (
            <div>
                <GeocodingInput parentCallback = {returnInputValue}/>
                <LeafletMapF lat = {23} lng = {-16} zoom = {13}/>
                
            </div>
            );
    }

    

}

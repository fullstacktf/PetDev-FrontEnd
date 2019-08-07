import React, {useState} from 'react';

import {GeocodingInput} from './GeocodingInput'
import {LeafletMapF} from '../maps/LeafletMapF';


export const InputAndMap = () => {


    const [results, setResults] = useState();
    const [needMapUpdate, setNeedMapUpdate] = useState();

   
    const returnInputValue = (results) =>{
        
        setResults({
          results
        });

    }
    const mapUpdate = () => {
        setNeedMapUpdate({
            needMapUpdate : true
        })
    }

    
    if (needMapUpdate){
        console.log(results.results.location.lat);
        console.log(results.results.location.lng);
        return (
            <div>
                <LeafletMapF mapUpdate = {needMapUpdate} lat = {results.results.location.lat} lng = {results.results.location.lng} zoom = {13}/>
                <GeocodingInput parentCallback = {returnInputValue}/>
            </div>
            );
    }else {
        return (
            <div>
                <LeafletMapF lat = {23} lng = {-16} zoom = {13}/>
                <GeocodingInput parentCallback = {returnInputValue}/>
            </div>
            );
    }

    

}

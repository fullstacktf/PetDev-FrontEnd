import React from "react";
import GoogleMapReact from "google-map-react";
import {apiKey as key} from "../../apiKey.json"
import { Map, TileLayer } from "react-leaflet";
import { Marker } from "./Marker";

const mapStyles = {
    width: "250px",
    height: "250px"
};

export const MiniMap = props => {
  return (
    

        <Map center={props.center} zoom={12} style={mapStyles}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                
                
                
        </Map>
   
  )
};

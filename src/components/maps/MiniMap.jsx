import React from "react";
import { Map, TileLayer } from "react-leaflet";
import { MiniMarker } from "./MiniMarker";

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
                
                <MiniMarker center={props.center}/>
                
        </Map>
   
  )
};

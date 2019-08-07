import React, {useState, useEffect, useRef} from 'react';

import { Map, TileLayer } from "react-leaflet";

import axios from "axios";
import { Marker } from "./Marker";

const mapStyles = {
    width: "100%",
    height: "65vh"
};

export const LeafletMapF = (props) => {
    
    const [users, setUsers] = useState([]); 
    const {lat, lng, zoom} = {...props};
    const mapRef = useRef(null);
  
    
    useEffect(() => {
        console.log('mapRef: ', mapRef.current);
        console.log("mapCenter", lat, lng, zoom);
        if(mapRef.current){
            console.log("IF", mapRef.current)
        //   mapRef.current.leaflet.panTo(props);
        } else {
            console.log("ELSE");
            mapRef.current = props; 
        }
        
        axios.get(`http://localhost:3001/api/users/`).then(res => {
            const usersInfo = res.data;
            console.log(usersInfo);
            setUsers(usersInfo);
        });
      }, [lat, lng, props, zoom]);
       
        return (
                
            <Map center={[lat, lng]} zoom={zoom} style={mapStyles}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {users.map(user => <Marker key={user.id} user={user}/>)}
                
            </Map>
        
    )
}
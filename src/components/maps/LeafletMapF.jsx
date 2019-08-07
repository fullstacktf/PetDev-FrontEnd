import React, {useState, useEffect} from 'react';

import { Map, TileLayer } from "react-leaflet";

import axios from "axios";
import { Marker } from "./Marker";

const mapStyles = {
    width: "100%",
    height: "65vh"
};

export const LeafletMapF = (props) => {
    
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        axios.get(`http://localhost:3001/api/users/`).then(res => {
            const usersInfo = res.data;
            console.log(usersInfo);
            setUsers(usersInfo);
        });
      }, []);
       
        return (
                
            <Map center={[props.lat, props.lng]} zoom={props.zoom} style={mapStyles}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {users.map(user => <Marker key={user.id} user={user}/>)}
                {console.log(props)}
            </Map>
        
    )
}
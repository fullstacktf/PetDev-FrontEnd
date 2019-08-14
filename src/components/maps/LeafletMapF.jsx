import React, { useState, useEffect } from 'react';

import { Map, TileLayer } from "react-leaflet";

import axios from "axios";
import { Marker } from "./Marker";

const API_URL = "http://localhost:3001/api"
const mapStyles = {
  width: "100vw",
  height: "92vh",
  position: "absolute",
  bottom: "0"
};

export const LeafletMapF = (props) => {
  const [users, setUsers] = useState([]);
  const { lat, lng, zoom } = { ...props };
  // const mapRef = useRef(null);

  useEffect(() => {


    axios.get(`${API_URL}/users/`).then(res => {
      const usersInfo = res.data;
      console.log(usersInfo);
      setUsers(usersInfo);
    });
  }, []);

  return <Map center={[lat, lng]} zoom={zoom} style={mapStyles}>
    {/*<TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
    <TileLayer attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL." url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png" />
    {users.map((user, i) => <Marker key={i} user={user} />)}
  </Map>;
};

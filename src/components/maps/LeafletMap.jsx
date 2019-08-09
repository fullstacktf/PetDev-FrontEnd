import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import axios from "axios";
import { Marker } from "./Marker";



const API_URL = "http://localhost:3001/api"
const mapStyles = {
  width: "850px",
  height: "620px"
};

export default class LeafletMap extends Component {
  state = {
    lat: 28.467297,
    lng: -16.2755351,
    zoom: 13,
    users: []
  };

  displayMarkers = () => {

  };

    componentWillMount() {
        axios.get(`${API_URL}/users/`).then(res => {
            const usersInfo = res.data;
            this.setState({ users: usersInfo });
        });
    }

    render() {
        const { users } = this.state;
        const position = [this.state.lat, this.state.lng];
        return (
            <Map center={position} zoom={this.state.zoom} style={mapStyles}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {users.map((user, i) => <Marker  key={i} user={user}/>)}
            </Map>
        );
    }
}

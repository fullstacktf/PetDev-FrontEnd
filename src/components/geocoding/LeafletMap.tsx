import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import PopUpMiniCardMap from "../users/PopUpMiniCardMap";
import { Marker } from "./Marker";

const mapStyles = {
    width: "100%",
    height: "65vh"
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
        axios.get(`http://192.168.1.63:3000/users/`).then(res => {
            const usersInfo = res.data;
            this.setState({ users: usersInfo });
        });
    }

    render() {
        const { users } = this.state;
        const position = [this.state.lng, this.state.lat];
        return (
            <Map center={[25,23]} zoom={this.state.zoom} style={mapStyles}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {users.map(user => <Marker key={user} user={user}/>)}
            </Map>
        );
    }
};
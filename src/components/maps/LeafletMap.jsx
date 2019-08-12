import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import axios from "axios";
import { Marker } from "./Marker";



const API_URL = "http://localhost:3001/api"
const mapStyles = {
    width: "100vw",
    height: "92vh",
    border:"5px solid darkgrey", 
    boxShadow:"inset 2px 2px 20px darkgrey",
    position:"absolute",
    bottom:"0"
};

export default class LeafletMap extends Component {


state = {
    lat: 28.469648,
    lng: -16.254088,
    zoom: 15,
    users: []
};

    componentWillMount() {
        axios.get(`${API_URL}/users/`).then(res => {
            const usersInfo = res.data;
            this.setState({ users: usersInfo });
        });

    };

    componentDidMount(){

    };

    updateMap(){
        this.setState({
            lat: this.props.lat,
            lng: this.props.lng,
            zoom: this.props.zoom,
        })
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
                {users.map((user, i) => <Marker key={i} user={user}/>)}
            </Map>
        );
    }
}

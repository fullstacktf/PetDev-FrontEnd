import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import PopUpMiniCardMap from "../users/PopUpMiniCardMap";

export const pointerIcon = new L.Icon({
  iconUrl: require("../../assets/faIcon.png"),
  iconRetinaUrl: require("../../assets/faIcon.png"),
  iconAnchor: [10, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 35]
  //shadowUrl: "../assets/marker-shadow.png",
  //shadowSize: [680, 905],
  //shadowAnchor: [20, 92]
});

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
    const markers = [];

    this.state.users.map((user, index) => {
      console.log(user);
      markers.push(
        <Marker
          key={index}
          position={user.geo.coordinates}
          icon={pointerIcon}
          onMouseOver={e => {
            e.target.openPopup();
          }}
          onMouseOut={e => {
            e.target.closePopup();
          }}
        >
          <Popup>
            <PopUpMiniCardMap name={user.name} />
          </Popup>
        </Marker>
      );
    });
    console.log(markers);
    return markers;
  };

  componentWillMount() {
    axios.get(`http://localhost:3000/users/`).then(res => {
      const usersInfo = res.data;
      this.setState({ users: usersInfo });
    });
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} style={mapStyles}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {this.displayMarkers()}
      </Map>
    );
  }
}

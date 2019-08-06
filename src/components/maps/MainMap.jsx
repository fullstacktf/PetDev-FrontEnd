import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';
import markerIcon from '../../assets/faIcon.png';

import apiKey from '../../apikey.json';


const mapStyles = {
  width: '100%',
  height: '65vh'
};

class MainMap extends Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},
    users: []         //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  displayMarkers = () => {
    const markers = [];

    this.state.users.map((user, index) => {
      console.log(user)
      markers.push(<Marker
        key={index}
        onClick={this.onMarkerClick}
        name={user.name}
        icon={markerIcon}
        position={{ lat: user.geo.coordinates[1], lng: user.geo.coordinates[0] }}
      />)


    })
    console.log(markers)
    return (markers);
  }

  componentWillMount() {
    axios.get(`http://localhost:4000/api/users/`)
      .then(res => {
        const usersInfo = res.data;
        this.setState({ users: usersInfo })
      })
  }

  render() {
    return (
      <div >
        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{
            lat: 28.467297,
            lng: -16.2755351
          }}
        >

          {this.displayMarkers()}

        </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey
})(MainMap);

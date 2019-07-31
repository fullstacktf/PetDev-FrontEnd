import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = () => <div>{"text"}</div>;

class ProfileMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "40vw", marginLeft: '30px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBzGVNtpx96mevl5hXFpx7n-ZeAeM3u1k8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={28.452302} lng={-16.2880045} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default ProfileMap;
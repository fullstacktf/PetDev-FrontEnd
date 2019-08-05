import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = () => <div>{"text"}</div>;

class MiniMap extends Component {
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
            <div style={{ height: "250px", width: "250px", marginLeft: '' }}>
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

export default MiniMap;
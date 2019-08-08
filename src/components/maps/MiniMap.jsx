import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class MiniMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            center: {
                lat: 10,
                lng: 10
            }
        }
    }
componentDidMount(){
    const {coordinates} = this.props.center.geo;
    if(coordinates){
    console.log(coordinates);
    this.setState({
        center: { 
            lat: coordinates[0],
            lng: coordinates[1]}
        }
    )
    }
}
    render() {
        

   
        
        return (

            // Important! Always set the container height explicitly
            <div style={{ height: "250px", width: "250px", marginLeft: '' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBzGVNtpx96mevl5hXFpx7n-ZeAeM3u1k8" }}
                    defaultCenter={{lat:12, lng:13}}
                    defaultZoom={10}
                >
            
                </GoogleMapReact>
            </div>
        );
    }
}

export default MiniMap;
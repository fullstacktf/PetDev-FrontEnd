import React from "react";
import GoogleMapReact from "google-map-react";
import apiKey from "../../apiKey.json"
export const MiniMap = props => {
  return (
    <div style={{ height: "250px", width: "250px" }}>
        {console.log(apiKey)}
      <GoogleMapReact
        bootstrapURLKeys=/* { apiKey }   */"AIzaSyBzGVNtpx96mevl5hXFpx7n-ZeAeM3u1k8"
        center={{
          lat: props.lat,
          lng: props.lng
        }}
        defaultZoom={10}
      />
    </div>
  );
};

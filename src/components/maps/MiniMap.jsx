import React, { Component, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
export const MiniMap = props => {
  return (
    <div style={{ height: "250px", width: "250px", marginLeft: "" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBzGVNtpx96mevl5hXFpx7n-ZeAeM3u1k8" }}
        center={{
          lat: props.lat,
          lng: props.lng
        }}
        defaultZoom={10}
      />
    </div>
  );
};

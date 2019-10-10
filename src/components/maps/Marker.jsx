import PopUpMiniCardMap from "../users/PopUpMiniCardMap";
import React, { useState } from "react";
import { Marker as LeafletMarker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const URL = "http://165.22.85.125:3001";

export const PointerIcon = new Icon({
  iconUrl: require("../../assets/faniMarker.png"),
  iconRetinaUrl: require("../../assets/faniMarker.png"),
  iconAnchor: [17, 55],
  popupAnchor: [17, -44],
  iconSize: [65, 65]
  //shadowUrl: "../assets/marker-shadow.png",
  //shadowSize: [680, 905],
  //shadowAnchor: [20, 92]
});

export const PointerIconSelected = new Icon({
  iconUrl: require("../../assets/faniMarker.png"),
  iconRetinaUrl: require("../../assets/faniMarker.png"),
  iconAnchor: [17, 55],
  popupAnchor: [17, -44],
  iconSize: [65, 65]
  //shadowUrl: "../assets/marker-shadow.png",
  //shadowSize: [170, 170],
  //shadowAnchor: [20, 92]
});

export const Marker = props => {
  const { user } = props;
  const [selected, setSelected] = useState(false);
  // console.log(user)
  const profileURL = `${URL}/users/${user._id}`;

  const handleOnMouseOver = e => {
    e.target.openPopup();
    setSelected(true);
  };

  const handleOnMouseOut = e => {
    setSelected(false);
    e.target.closePopup();
    //window.location.href = profileURL;
  };

  const handleOnClick = e => {
    window.location.assign(profileURL);
  };

  return (
    <LeafletMarker
      position={user.geo.coordinates}
      icon={selected ? PointerIcon : PointerIconSelected}
      onMouseOut={handleOnMouseOut}
      onMouseOver={handleOnMouseOver}
      onClick={handleOnClick}
    >
      <Popup>
        <PopUpMiniCardMap user={{ ...user }} />
      </Popup>
    </LeafletMarker>
  );
};

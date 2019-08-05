import PopUpMiniCardMap from "../users/PopUpMiniCardMap";
import React, { useState } from "react";
import { Marker as LeafletMarker, Popup } from "react-leaflet";
import L from "leaflet";

export const PointerIcon = new L.Icon({
    iconUrl: require("../../assets/faIcon.png"),
    iconRetinaUrl: require("../../assets/faIcon.png"),
    iconAnchor: [10, 55],
    popupAnchor: [10, -44],
    iconSize: [35, 35]
    //shadowUrl: "../assets/marker-shadow.png",
    //shadowSize: [680, 905],
    //shadowAnchor: [20, 92]
});

export const PointerIconSelected = new L.Icon({
    iconUrl: require("../../assets/faIconSelected.png"),
    iconRetinaUrl: require("../../assets/faIconSelected.png"),
    iconAnchor: [10, 55],
    popupAnchor: [10, -44],
    iconSize: [35, 35]
    //shadowUrl: "../assets/marker-shadow.png",
    //shadowSize: [680, 905],
    //shadowAnchor: [20, 92]
});


export const Marker = props => {
    const { user } = props;
    const [selected, setSelected] = useState(false);

    const handleOnMouseOver = (e) => {
        e.target.openPopup();
        setSelected(true);
    };

    const handleOnMouseOut = (e) => {
        setSelected(false);
        e.target.closePopup();
    };

    return <LeafletMarker
        position={user.geo.coordinates}
        icon={selected ? PointerIcon : PointerIconSelected}
        onMouseOut={handleOnMouseOut}>
        onMouseOver={handleOnMouseOver}>
        <Popup>
            <PopUpMiniCardMap name={user.name}/>
        </Popup>
</LeafletMarker>
};
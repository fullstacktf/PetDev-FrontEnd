import PopUpMiniCardMap from "../users/PopUpMiniCardMap";
import React, { useState } from "react";
import { Marker as LeafletMarker, Popup,  } from "react-leaflet";
import L from "leaflet";
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';

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
    //shadowSize: [100, 100],
    //shadowAnchor: [20, 92]
});

export const Marker = props => {
    const { user } = props;
    const [selected, setSelected] = useState(false);
   // console.log(user)
   const profileURL = `http://localhost:3000/user/${user._id}`;

    const handleOnMouseOver = (e) => {
        e.target.openPopup();
        setSelected(true);
    };

    const handleOnMouseOut = (e) => {
        setSelected(false);
        e.target.closePopup();
        //window.location.href = profileURL;
    };
    
    const handleOnClick = (e)=> {
        
        window.location.replace(profileURL);
        
    }
    

    return (
        
           
        
    <LeafletMarker
        position={user.geo.coordinates}
        icon={selected ? PointerIcon : PointerIconSelected}
        onMouseOut={handleOnMouseOut}
        onMouseOver={handleOnMouseOver}
        onClick={handleOnClick}
        >
        
        <Popup>
            <PopUpMiniCardMap name={user.name}/>
        </Popup>
    </LeafletMarker>
 
    
    )
};

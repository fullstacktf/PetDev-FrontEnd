import { Marker as LeafletMiniMarker  } from "react-leaflet";
import {Icon} from "leaflet";
import React, {useState} from 'react';
export const PointerIcon = new Icon({
    iconUrl: require("../../assets/faIcon.png"),
    iconRetinaUrl: require("../../assets/faIcon.png"),
    iconAnchor: [10, 55],
    popupAnchor: [10, -44],
    iconSize: [35, 35]
    //shadowUrl: "../assets/marker-shadow.png",
    //shadowSize: [680, 905],
    //shadowAnchor: [20, 92]
});

export const PointerIconSelected = new Icon({
    iconUrl: require("../../assets/faIconSelected.png"),
    iconRetinaUrl: require("../../assets/faIconSelected.png"),
    iconAnchor: [10, 55],
    popupAnchor: [10, -44],
    iconSize: [35, 35]
    //shadowUrl: "../assets/marker-shadow.png",
    //shadowSize: [100, 100],
    //shadowAnchor: [20, 92]
});

export const MiniMarker = props => {
    
    const [selected, setSelected] = useState(false);

    console.log(props);

    const handleOnMouseOver = (e) => {
        console.log('OPEN');
        setSelected(true);
    };

    const handleOnMouseOut = (e) => {
        console.log('CLOSE');
        setSelected(false);
        

    };

    

    return (
        
           
        
    <LeafletMiniMarker
        position={props.center}
        icon={selected ? PointerIcon : PointerIconSelected}
        onMouseOut={handleOnMouseOut}
        onMouseOver={handleOnMouseOver}/>
        

 
    
    )
};
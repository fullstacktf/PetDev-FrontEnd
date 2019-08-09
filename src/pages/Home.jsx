import React from "react";
import { css } from 'emotion'
import AccordionHome from "../components/containers/AccordionHome";
import { MapAndInput } from "../components/geocoding/MapAndInput";


export default class Home extends React.Component {
  render() {
    return (
      <div className={css`
        width: 100%;
        height: 100%;
        margin: 25px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: top;
      `}>
        <div className={css`
        margin-top: 100px;
        margin: 25px;
        `}>
          <AccordionHome />
        </div>
      <div>
        <MapAndInput/>
      </div>
      </div>
    );
  }
}

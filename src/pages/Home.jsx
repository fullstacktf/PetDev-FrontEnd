import React from "react";
import { InputSearchHomePage } from "../components/forms/InputSearchHomePage";
import { axiosHandler } from "../axios";
import LeafletMap from "../components/maps/LeafletMap";
import { css } from 'emotion'
import { Header, Divider, Accordion } from "semantic-ui-react";
import AccordionHome from "../components/containers/AccordionHome";
export default class Home extends React.Component {
  render() {
    const newUser = { name: "test" };
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
        margin-top: 150px;
        margin: 25px;
        `}>
          <InputSearchHomePage />
          {axiosHandler("GET", "/users", newUser)}
          <LeafletMap />
        </div>

        <div className={css`
        margin-top: 100px;
        margin: 25px;
        `}>
          <AccordionHome />
        </div>
      </div>
    );
  }
}

import React from "react";
import { InputSearchHomePage } from "../components/forms/InputSearchHomePage";
import { axiosHandler } from "../axios";
import LeafletMap from "../components/maps/LeafletMap";
import { css } from 'emotion'
import { Header, Divider } from "semantic-ui-react";
import MiniBoxIcon from "../components/containers/MiniBoxHome";
export default class Home extends React.Component {
  render() {
    const newUser = { name: "test" };
    return (
      <div className={css`
        top: 95px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

      `}>
        <div className={css`
            width: auto;
            height: auto;
        `} >
          <div className={css` margin: 15px;`}>
            <Header inverted textAlign='center' color={"grey"} centered as="h2" >"ENCUENTRA PERSONAS DE CONFIANZA PARA TU MASCOTA"</Header>
          </div>
          <InputSearchHomePage />
          {axiosHandler("GET", "/users", newUser)}
        </div>

        <div className={css`
          width: auto;
          height: auto;
      `}>
          <LeafletMap />
        </div>
        <Divider vertical />
        <div>
          <MiniBoxIcon />
        </div>

      </div>
    );
  }
}

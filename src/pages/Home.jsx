import React from "react";
import { InputSearchHomePage } from "../components/forms/InputSearchHomePage";
import { axiosHandler } from "../axios";
import LeafletMap from "../components/maps/LeafletMap";

export default class Home extends React.Component {
  render() {
    const newUser = { name: "test" };
    return (
      <div>
        <InputSearchHomePage />
        {axiosHandler("GET", "/users", newUser)}
        <LeafletMap />
      </div>
    );
  }
}

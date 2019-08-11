import React from "react";
import { InputSearchHomePage } from "../components/forms/InputSearchHomePage";
import { InputAndMap } from './../components/geocoding/InputAndMap.jsx'

export default class Home extends React.Component {
  render() {
    return (

      <div>
        <InputSearchHomePage/>
        <InputAndMap/>
      </div>
    );
  }
}

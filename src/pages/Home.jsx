import React from "react";
import { css } from 'emotion'
import DatePicker from 'react-datepicker2';
import image from '../../src/assets/dogbackground.jpg';


export default class Home extends React.Component {
  render() {
    return (
      <div className={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        background-image: url('${image}');
        background-size:     cover;
        background-repeat:   no-repeat;
        background-position: center center;
      `}>
        <div className={css`
          margin-left: 100px;
        `}>
          FECHA DE ENTRADA<DatePicker />
          FECHA DE SALIDA<DatePicker />

        </div>
      </div>
    );
  }
}

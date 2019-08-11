import React from "react";
<<<<<<< HEAD
import { css } from 'emotion'
import image from '../../src/assets/dogbackground.jpg';
import Calendar from "../components/bookings/Calendar";
import {GeocodingInput} from '../components/geocoding/GeocodingInput';
import styled from '@emotion/styled';
import { Button } from 'semantic-ui-react';

=======
import { InputSearchHomePage } from "../components/forms/InputSearchHomePage";
import { InputAndMap } from './../components/geocoding/InputAndMap.jsx'
>>>>>>> develop

const bodyStyle = css`
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
`
const Form = styled.form`
  background: white;
  width: 400px;
  height: 400px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px; 
  border-radius: 10px;

  box-shadow: 3px 3px 8px darkgrey;
  `

class Home extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className={bodyStyle}>
        <div className={css`
          margin-left: 100px;
        `}>
          <Form>
            <GeocodingInput/>
            <Calendar/>
            <Button compact color="purple">Enviar</Button>

          </Form>
          

        </div>
=======

      <div>
        <InputSearchHomePage/>
        <InputAndMap/>
>>>>>>> develop
      </div>
    );
  }
}

export default Home;
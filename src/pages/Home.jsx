import React from "react";
import { css } from 'emotion'
import image from '../../src/assets/dogbackground.jpg';
import Calendar from "../components/bookings/Calendar";
import {GeocodingInput} from '../components/geocoding/GeocodingInput';
import styled from '@emotion/styled';
import { Button } from 'semantic-ui-react';


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
  background: #ffffffb3;
  width: 400px;
  height: 400px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px; 
  border-radius: 3px;
  `

const Home = () => {
  
    return (
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
      </div>
    );
  }


export default Home;
import React from 'react'
import TextContainer from '../components/containers/TextContainer';
import './About.css'
import TeamCard from '../components/users/TeamCards';
import { Divider } from 'semantic-ui-react';
import { css } from 'emotion'

const About = () => (
  <div className={css`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}>

    <div className={css`
      width: 1200px;
    `}>
      <Divider horizontal>About</Divider>
      <TextContainer />
    </div>

    <div>
      <Divider horizontal>Our team</Divider>
      <TeamCard />
    </div>
  </div>
)

export default About

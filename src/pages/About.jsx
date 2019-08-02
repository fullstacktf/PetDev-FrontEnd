import React from 'react'
import TextContainer from '../components/containers/TextContainer';
import './About.css'
import TeamCard from '../components/users/TeamCards';

const About = () => (
    <div className="container">

        <div className="text-container">
            <TextContainer />
            <TeamCard />
        </div>
    </div>
)

export default About
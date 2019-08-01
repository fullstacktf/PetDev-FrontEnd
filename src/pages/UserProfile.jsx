
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import HeaderFanimals from '../components/HeaderFanimals';
import Footer from '../components/FooterHomePage';
import { Container, FeedUser } from 'semantic-ui-react'
import ProfileMap from '../components/ProfileMap';
import './UserProfile.css';
import UserCardProfile from '../components/UserCardProfile';
import PetMiniCard from '../components/PetMiniCard';
import FeedUsers from '../components/FeedUsers';
import GridImages from '../components/GridImages';

const UserProfile = () => (
    <div className="superContainer">
        <style>{`
    html, body {
        background-color: #d7a8f0; !important
      
    }
    
    `}
        </style>
        <Container className="container" fluid textAlign="center" >
            <HeaderFanimals />
            <div className="container-divs">
                <div className="card-container">
                    <div>
                        <UserCardProfile />
                    </div>
                </div>
                <div className="container-right">
                    <div className="pet-conatiner">
                        <PetMiniCard />
                    </div>
                    <br />
                    <div>
                        <GridImages />
                    </div>
                    <br />
                    <div>
                        <FeedUsers />
                    </div>
                </div>
            </div>
            <Footer />
        </Container >
    </div>
)

export default UserProfile;


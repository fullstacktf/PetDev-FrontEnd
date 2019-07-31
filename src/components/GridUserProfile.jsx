import React from 'react'
import { Grid, Header, Image} from 'semantic-ui-react';
import UserCard from './CardUser'
import ProfileMap from './ProfileMap'
import SideBar from './Sidebar'
import HeaderUserProfile from './HeaderUserProfile';
import CalendarUserProfile from './CalendarUserProfile';

const style = {
    h1: { margin: '2em',},
    
  }
  const GridUserProfile = () => (
 
    <div className="landing">
      <style>{`
      html, body {
        background-color: #d7a8f0; !important
        width: 90%; !important;
        height: 90%; !important;
        z-index: -1;
        
        
      }
      
      `}
    </style>
  
    <Grid  container rows={4}  columns={1} >
    <Grid.Row>
        <HeaderUserProfile/>
      </Grid.Row>
      <Grid.Row>
        <UserCard/>
      </Grid.Row>
      <Grid.Column>
        <CalendarUserProfile/>
      </Grid.Column>
      
      <Grid.Row>
        <ProfileMap/>
      </Grid.Row>
     

      
   
    </Grid>
  
</div>
)
export default GridUserProfile
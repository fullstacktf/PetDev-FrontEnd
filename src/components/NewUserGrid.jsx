import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import HeaderUserProfile from './HeaderUserProfile'
import CalendarUserProfile from './CalendarUserProfile';
import UserCard from './CardUser';
import ProfileMap from './ProfileMap';
import UserComents from './UserComents';
import SidebarHomePage from './Sidebar'
import UserSlidePhoto from './UserSlidePhotos';
import CustomDotGroup from './DotGroup';
import SimpleSlider from './UserSlidePhotos';

const NewUserGrid = () => (
  
  <Grid columns={4} >
  
    
    
    <Grid.Row>
      
        
      
      <Grid.Column>
        <UserCard/>
      </Grid.Column>
      
      
      <Grid.Column>
        <CalendarUserProfile/>
      </Grid.Column>
     
      
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
       <ProfileMap/>
      </Grid.Column>
      
      <Grid.Column>
        <UserComents/>
      </Grid.Column>
      
    </Grid.Row>
  </Grid>
  
)

export default NewUserGrid
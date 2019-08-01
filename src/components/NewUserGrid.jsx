import React from 'react'
import { Grid } from 'semantic-ui-react'
import UserCard from './CardUser';
import ProfileMap from './ProfileMap';
import UserComents from './UserComents';

const NewUserGrid = () => (

  <Grid columns={4} >



    <Grid.Row>



      <Grid.Column>
        <UserCard />
      </Grid.Column>



    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <ProfileMap />
      </Grid.Column>

      <Grid.Column>
        <UserComents />
      </Grid.Column>

    </Grid.Row>
  </Grid>

)

export default NewUserGrid
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const GridImages = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image bordered rounded size='large' src='https://source.unsplash.com/random/400x200' />
      </Grid.Column>
      <Grid.Column>
        <Image bordered rounded size='large' src='https://source.unsplash.com/random/500x281.25' />
      </Grid.Column>
      <Grid.Column>
        <Image bordered rounded size='large' src='https://source.unsplash.com/random/600x300' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridImages

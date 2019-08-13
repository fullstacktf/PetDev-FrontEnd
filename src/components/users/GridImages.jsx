import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const GridImages = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image size='large' src='https://source.unsplash.com/random/800x600' />
      </Grid.Column>
      <Grid.Column>
        <Image size='large' src='https://source.unsplash.com/random/600x400' />
      </Grid.Column>
      <Grid.Column>
        <Image size='large' src='https://source.unsplash.com/random/1240x1024' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridImages

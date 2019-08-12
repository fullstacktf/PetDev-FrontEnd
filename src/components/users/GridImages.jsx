import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridImages = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image size='large' src='https://www.biositemaps.org/wp-content/uploads/2018/11/simple-home-garden-ideas_astonishing_garden_design_ideas_for_small_backyards_14_for_your.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image size='large' src='https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/150838553-tips-for-first-30-days-dog-632x475.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image size='large' src='https://i.ytimg.com/vi/pKMh3M8idlg/hqdefault.jpg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridImages

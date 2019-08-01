import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridImages = () => (
    <Grid>
        <Grid.Row columns={3}>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default GridImages

import React from 'react'
import { Image as ImageComponent, Item, Divider } from 'semantic-ui-react'

const paragraph = <ImageComponent src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const TeamCard = () => (
    <Item.Group link>
        <Divider horizontal inverted>Team</Divider>
        <Item>
            <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />

            <Item.Content>
                <Item.Header>Stevie Feliciano</Item.Header>
                <Item.Description>{paragraph}</Item.Description>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/veronika.jpg' />

            <Item.Content>
                <Item.Header>Veronika Ossi</Item.Header>
                <Item.Description>{paragraph}</Item.Description>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />

            <Item.Content>
                <Item.Header>Jenny Hess</Item.Header>
                <Item.Description>{paragraph}</Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
)

export default TeamCard


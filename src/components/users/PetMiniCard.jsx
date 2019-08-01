import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const PetMiniCard = () => (
    <Card.Group>
        <Card>
            <Card.Content>
                <Image floated='right' circular size='mini' src='https://saudeplanoparapet.nsbeneficios.com.br/img/carenciazero_pet_mobile.png' />
                <Card.Header>Firulai</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Image floated='right' circular size='mini' src='https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg' />
                <Card.Header>Toby</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                    Molly wants to add you to the group <strong>musicians</strong>
                </Card.Description>
            </Card.Content>
        </Card>
    </Card.Group>
)

export default PetMiniCard

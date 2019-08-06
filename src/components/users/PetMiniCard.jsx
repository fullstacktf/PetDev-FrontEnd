import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react';




const PetMiniCard = () => (
    <Card.Group centered>
        <Card>
            <Card.Content>
                <Image floated='right' circular size='mini' src='https://saudeplanoparapet.nsbeneficios.com.br/img/carenciazero_pet_mobile.png' />
                <Card.Header><Icon name="paw" />Firulai</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                    A Firulai le encanta las pelotas.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Image floated='right' circular size='mini' src='https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg' />

                <Card.Header><Icon name="paw" />Toby</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                    Todo el tiempo Toby caza lagartos en el parque.
                </Card.Description>
            </Card.Content>
        </Card>
    </Card.Group>
)

export default PetMiniCard

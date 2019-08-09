import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react';

const petMiniCardStyle ={
    border: '1px solid grey',
    borderRadius: '3px',
}

const PetMiniCard = () => (
    <Card.Group  centered>
        <Card >
            <Card.Content>
                <Image floated='right' circular size='mini' src='https://saudeplanoparapet.nsbeneficios.com.br/img/carenciazero_pet_mobile.png' />
                <Card.Header><Icon name="paw" />Firulai</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                    A Firulai le encanta las pelotas.
                </Card.Description>
            </Card.Content>
        </Card>
        
    </Card.Group>
)

export default PetMiniCard

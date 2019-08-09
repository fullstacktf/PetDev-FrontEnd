import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

const PopUpMiniCardMap = (props) => {
/*     static defaultProps = {
        name: 'Pepe',
        numbersOfFriends: '10',
        description: 'Una gran persona',
        urlImage: ''
    };
 */
        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image floated='right' circular size='mini' src={props.urlImage}/>
                        <Card.Header>{props.name}</Card.Header>
                        <Card.Meta>{props.houseType}</Card.Meta>
                        <Card.Description>{props.description}</Card.Description>
                    </Card.Content>
                </Card>

            </Card.Group>
        )
    };
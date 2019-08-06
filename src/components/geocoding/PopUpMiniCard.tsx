import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

interface PopUpMiniCardMapProps {
    name: string;
    numbersOfFriends: number;
    description: string;
    urlImage: string;
}

export default class PopUpMiniCardMap extends Component<PopUpMiniCardMapProps> {
    static defaultProps = {
        name: 'Pepe',
        numbersOfFriends: '10',
        description: 'Una gran persona',
        urlImage: ''
    };

    render() {
        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image floated='right' circular size='mini' src={this.props.urlImage}/>
                        <Card.Header>{this.props.name}</Card.Header>
                        <Card.Meta>{this.props.numbersOfFriends}</Card.Meta>
                        <Card.Description>{this.props.description}</Card.Description>
                    </Card.Content>
                </Card>

            </Card.Group>
        )
    }
};
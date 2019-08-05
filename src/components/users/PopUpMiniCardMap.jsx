import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'



export default class PopUpMiniCardMap extends Component { 
    constructor(props) {

        super(props)
        this.props = {
            name: 'Pepe',
            numbersOfFriends: '10',
            description: 'Una gran persona',
            urlImage: ''
        }
    }
    
    render() {
        return(
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image floated='right' circular size='mini' src={this.props.urlImage} />
                        <Card.Header>{this.props.name}</Card.Header>
                        <Card.Meta>{this.props.numbersOfFriends}</Card.Meta>
                        <Card.Description>{this.props.description}</Card.Description>
                    </Card.Content>
                </Card>
            
            </Card.Group>
    )
  }
    
}

    
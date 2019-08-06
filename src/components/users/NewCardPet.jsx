import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import axios from 'axios';

const id =  "5d49c446b097c85ec3631e6f";

class NewCardPet extends Component {
    state= {
        user: {},
        pets: {}
    };

    componentWillMount(){
        axios.get(`http://localhost:3001/api/users/${id}`).then(res =>{
            const user = res.data;
            const pets = res.data.pets;
            
            this.setState({
                user,
                pets
            });
            console.log(pets)
        });
    }
    render() {
        return (
        <Card.Group centered>
        <Card>
            <Card.Content>
                <Image floated='right' circular size='mini' src='https://saudeplanoparapet.nsbeneficios.com.br/img/carenciazero_pet_mobile.png' />
                <Card.Header><Icon name="paw" />{this.state.pets.petName}</Card.Header>
                <Card.Meta>Owner: {this.state.user.name}</Card.Meta>
                <Card.Description>
                   {this.state.pets.chip}
             
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
    }
    }

    export default NewCardPet;

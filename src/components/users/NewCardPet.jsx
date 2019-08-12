/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import axios from 'axios';


const API_URL = "http://localhost:3001/api";
const defaultPets = { petName: "Default Pet", petDescription: "Very default", petImg: "https://saudeplanoparapet.nsbeneficios.com.br/img/carenciazero_pet_mobile.png" };
const defaultUser = { name: "Default User" };

const NewCardPet = (props) => {
    const [user, setUser] = useState(defaultPets);
    const [pets, setPets] = useState(defaultUser);

    const getUser = () => {
        const { userID } = props.id.params;
        axios({
            method: "get",
            url: `${API_URL}/users/${userID}`
        }).then(res => {
            setUser(res.data);
            setPets(res.data.pets);
            console.log(pets)
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    if (pets !== undefined) return (
        <Card.Group centered>
            <Card>
                <Card.Content>
                    <Image floated='right' circular size='mini' src={"https://saudeplanoparapet.nsbeneficios.com.br/img/carenciazero_pet_mobile.png"} />
                    <Card.Header><Icon name="paw" />{pets.petName}</Card.Header>
                    <Card.Meta>Owner: {user.name}</Card.Meta>
                    <Card.Description>
                        {pets.petDescription}

                    </Card.Description>
                </Card.Content>
            </Card>

        </Card.Group>

    )
    else return (<div>None</div>)
}


export default NewCardPet;

import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import styled from "@emotion/styled";

const Description = styled.div`
text-align:center`;

const PopUpMiniCardMap = (props) => {
    console.log(props)

    return (

        <Card >
            <Card.Content>
                <Image floated='right' circular size='mini' src={props.user.avatarURL}/> 
                <Card.Header><h1>{props.user.name}</h1></Card.Header>
                <Card.Meta> <Rating icon='star' disabled defaultRating={props.user.rating} maxRating={5} /></Card.Meta>
                <Card.Meta>{props.user.houseType}</Card.Meta>
                <Description>{props.user.description}</Description>
            </Card.Content>
        </Card>

    )
}

export default PopUpMiniCardMap;

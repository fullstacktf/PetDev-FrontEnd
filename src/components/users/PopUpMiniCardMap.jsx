import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const PopUpMiniCardMap = (props) =>{
    console.log(props)

        return (
        
                <Card>
                    <Card.Content>
                       {/*  <Image floated='right' circular size='mini' src={"props.urlImage"}/> */}
                        <Card.Header>{props.user.name}</Card.Header>
                        <Card.Meta>{props.user.houseType}</Card.Meta>
                        <Card.Description>{props.user.description}</Card.Description>
                    </Card.Content>
                </Card>
            
        )
    }

    export default PopUpMiniCardMap;

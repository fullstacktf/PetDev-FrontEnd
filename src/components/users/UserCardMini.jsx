import React from 'react';
import { Card, Icon, Image} from 'semantic-ui-react';
import styled from '@emotion/styled';
import {Rating} from "semantic-ui-react";



const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: darkgrey ;
    

`;

const UserCardMini = ({user}) => {

  console.log(user);

  let petName = "Without pets";

  if(user.pets){
    petName = user.pets.petName;
  }
  
  


return( <Card style={{
    margin: "15px",
    height: "450px"
  }}className="card1" color="purple">

    <Card.Content>

      <Card.Header>{user.name}</Card.Header>
     {/*  <Card.Meta css={cardTitle}> */}<SubTitleContainer> 
        <span className='distance'>1.6 kms</span>
        <Rating icon='star' defaultRating={3} maxRating={5} />
        </SubTitleContainer>
     {/*  </Card.Meta> */}
      <Card.Description>
       {user.address.addressLine}
      </Card.Description>

      <Card.Description>
        Type house: {user.houseType}
        
      </Card.Description>
      
      <Card.Content style={{
        display:"flex",
        justifyContent:"center"
      }}>
        <Image  src='https://react.semantic-ui.com/images/avatar/large/matthew.png'  />
      </Card.Content>

      <Card.Content>
        {user.description}
      </Card.Content>
    </Card.Content>
    <Card.Content extra>
      <a href="http://goole.com">
        <Icon name='paw' />
      
          Mascotas: {petName}
        
      </a>
    </Card.Content>
  </Card>
)}

export default UserCardMini;
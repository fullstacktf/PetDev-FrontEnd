import React from 'react';
import { Card, Icon, Image} from 'semantic-ui-react';
import styled from '@emotion/styled';
import {Rating} from "semantic-ui-react";

const URL = "http://localhost:3000";


const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: darkgrey ;
    

`;

const DescriptionContainer = styled.div` 
  margin-top: 5px;
  text-align: center;
`

const UserCardMini = ({user}) => {

  let petName = "Without pets";

  if(user.pets){
    petName = user.pets.petName;
  }
  const distance = Math.random()*10+1;
  const profileURL = `${URL}/user/${user._id}`;
return( <Card style={{
    margin: "15px",
    
  }}className="card1">

    <Card.Content>

      <Card.Header>{user.name}</Card.Header>
     {/*  <Card.Meta css={cardTitle}> */}<SubTitleContainer> 
        <span className='distance'>{distance.toFixed(2)} kms</span>
        <Rating icon='star' defaultRating={user.rating} disabled maxRating={5} />
        </SubTitleContainer>
     {/*  </Card.Meta> */}
      <Card.Description>
      
      {user.address.addressLine}
      
      </Card.Description>

      <Card.Description>
        House type: {user.houseType}
        
      </Card.Description>
      
      <Card.Content style={{
        display:"flex",
        justifyContent:"center"
      }}>
        <a href={profileURL}><Image width="200px" src={user.avatarURL}  /></a>
      </Card.Content>

      <Card.Content>
      <DescriptionContainer>
        {user.description}
        </DescriptionContainer>
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
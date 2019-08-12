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

const UserCardMini = () => (

  <Card style={{
    margin: "15px",
    height: "450px"
  }}className="card1" color="purple">

    <Card.Content>

      <Card.Header>Aaron</Card.Header>
     {/*  <Card.Meta css={cardTitle}> */}<SubTitleContainer> 
        <span className='distance'>1.6 kms</span>
        <Rating icon='star' defaultRating={3} maxRating={5} />
        </SubTitleContainer>
     {/*  </Card.Meta> */}
      <Card.Description>
        C/ Sargento Provisional nº16 3ºIzda
      </Card.Description>
      <Card.Description>
        Piso.
      </Card.Description>
      
      <Card.Content style={{
        display:"flex",
        justifyContent:"center"
      }}>
        <Image  src='https://react.semantic-ui.com/images/avatar/large/matthew.png'  />
      </Card.Content>

      <Card.Content>
        Persona amantes de los animales, veterinario y desarrollador de Fanimals
      </Card.Content>
    </Card.Content>
    <Card.Content extra>
      <a href="http://goole.com">
        <Icon name='paw' />
        Número de mascotas: 2
      </a>
    </Card.Content>
  </Card>
)

export default UserCardMini;
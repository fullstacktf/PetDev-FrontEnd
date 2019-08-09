import React from "react";
import styled from '@emotion/styled';
import UserCardMini from '../components/users/UserCardMini'

const Container = styled.div`
    margin:auto;
    border: 1px solid red;
    width: 70vw;
    height: 100%;
    padding: 50px; 
    color: black;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`;


const MOCKED_USERS=[];
const USERS_NUM=8;

for (let i = 0; i < USERS_NUM; i++) {
  MOCKED_USERS.push(<UserCardMini/>);
  
}


export default class NearUsers extends React.Component {
  
  render() {
    return (
      <Container>
        
        {React.Children.toArray(MOCKED_USERS)}
        
      </Container>
    );
  }
}

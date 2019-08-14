import React from "react";
import styled from '@emotion/styled';
import UserCardMini from '../components/users/UserCardMini';
import axios from "axios";

const API_URL = 'http://localhost:3001/api'


const Container = styled.div`
    width: 70vw;
    height: 100%;
    color: black;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`;

const MOCKED_USERS=[];

export default class NearUsers extends React.Component {

  componentDidMount(){
    axios.get(`${API_URL}/users/`).then(res => {
      const usersInfo = res.data;

      for (let i = 0; i < usersInfo.length; i++) {
        MOCKED_USERS.push(<UserCardMini key={i} user={usersInfo[i]}/>);
        
      }

      this.setState({ users: usersInfo });
  });
  }
  
  render() {
    return (
      <Container>
        
        {React.Children.toArray(MOCKED_USERS)}
        
      </Container>
    );
  }
}

import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import InputSearchHomePage from './SearchHomePage';
import Photo from '../'


const ContainerHomePage = () => (
    <div>
    <style>{`
      html, body {
        background-color: #d7a8f0; 
        
      }
      
      `}
    </style>
    <Container className="container" fluid textAlign="center" >
      <Header style={{marginLeft: '45px'}} as='h1'>Tu alternativa al hospedaje de mascotas</Header>
      <InputSearchHomePage/>
    </Container >
  </div>
)

export default ContainerHomePage
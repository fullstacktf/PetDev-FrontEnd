
import React from 'react'
import { Container } from 'semantic-ui-react'
import NewUserGrid from './NewUserGrid';
import Image from '../assets/Pet2Login.jpeg'

const UserContainer = () => (
    <div className="landing">
      <style>{`
      html, body {
        background-image: url('../assets/Pet2Login.jpeg'); !important
        width: 90%; !important;
        height: 90%; !important;
        z-index: -1;
        
        
      }
      
      `}
    </style>
  <Container fluid>
    
    <NewUserGrid/>
    
        
  </Container>
 </div>
)


export default UserContainer
import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import HeaderFanimals from './HeaderFanimals';
import Footer from './FooterHomePage';


const FramePage = () => (
    <div>
        <style>{`
      html, body {
        background-color: #d7a8f0; !important
        
      }
      
      `}
        </style>
        <Container className="container" fluid textAlign="center" >
            <HeaderFanimals />
            <Footer />
        </Container >
    </div>
)

export default FramePage;
import React from 'react'
import { Container } from 'semantic-ui-react'
import HeaderFanimals from './HeaderFanimals';
import ContainerHomePage from './ContainerHomePage';
import Footer from './FooterHomePage';

const HomePage = () => (
  <Container>
    <HeaderFanimals />
    <ContainerHomePage />
    <Footer />

  </Container>
)

export default connect (HomePage)
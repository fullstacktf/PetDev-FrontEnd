import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import Image from '../../assets/faniLogo.png';
import Popup from "reactjs-popup";
import LoginForm from "../forms/LoginForm";
import FakeSignUpForm from '../forms/FakeSignUpForm';
import styled from '@emotion/styled';
// TODO: Update <Search> usage after its will be implemented
const HeaderContainer = styled.div`
z-index: -5000;
  

`

const HeaderFanimals = () => (
  <HeaderContainer>
    <Menu fixed="top">
      <a href="/"><img width="75px" height="75px" src={Image} alt="" style={{ padding: "10px" }} /></a>
      <h1 style={{ margin: 'auto', marginLeft: '10px' }}>  Fanimals</h1>

      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>

            <div>
              <Popup
                trigger={<Button compact color="purple" >Login</Button>}
                closeOnDocumentClick

              >
                <LoginForm />
              </Popup>
              <Popup
                modal
                trigger={<Button compact color="violet" >Register</Button>}
                closeOnDocumentClick
                contentStyle={{ width: "auto" }}
              >
                <FakeSignUpForm />
              </Popup>
            </div>


          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>
  </HeaderContainer>

)



export default HeaderFanimals;

import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import Image from '../../assets/faniLogo.png';
import Popup from "reactjs-popup";
import LoginForm from "../forms/LoginForm";
import {SignUpForm} from "../forms/SignUpForm";
import {Link} from 'react-router-dom';
// TODO: Update <Search> usage after its will be implemented

const HeaderFanimals = () => (

    <Menu fixed="top">
    <Link to="/home"><img width="75px" height="75px" src={Image} alt="" style={{padding:"10px"}}/></Link>
      <h1 style={{ margin: 'auto', marginLeft: '10px' }}>  Fanimals</h1>

      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>

            <div>
            <Popup
            trigger={<Button compact color="purple" >Login</Button>}
            closeOnDocumentClick
          >
            <LoginForm/>
            </Popup>
            <Popup
            modal
            trigger={<Button compact color="violet" >Register</Button>}          
            closeOnDocumentClick
          >
            <SignUpForm/>
            </Popup>          
            </div>


          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>
)



export default HeaderFanimals;
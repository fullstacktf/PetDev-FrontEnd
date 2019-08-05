import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import image from '../../assets/logo-fanimals.png'
// TODO: Update <Search> usage after its will be implemented

const HeaderFanimals = () => (
  <div>
    <Menu fixed="top">
      <h1 style={{ margin: 'auto', marginLeft: '10px' }}> <img src={image} alt="" /> Fanimals</h1>

      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>

            <div>
              <Link to="/login"><Button compact color="purple" >Login</Button></Link>
              <Link to="/signup"> <Button compact color="violet" >Register</Button></Link>
            </div>


          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>


  </div>
)

export default HeaderFanimals
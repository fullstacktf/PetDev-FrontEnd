import React from 'react'
import { Button, Icon, Menu, Segment } from 'semantic-ui-react'

// TODO: Update <Search> usage after its will be implemented

const HeaderFanimals = () => (
  <div>
    <Menu fixed="top">
      <h1 style={{margin: 'auto', marginLeft:'10px'}}>Fanimals</h1>

      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            
        <div>
        <Button compact color="purple" >Login</Button>
         <Button compact color="violet" >Register</Button>
        </div>


          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>

    
  </div>
)

export default HeaderFanimals
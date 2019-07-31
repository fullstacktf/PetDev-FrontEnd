import React from 'react'
import { Icon, Input } from 'semantic-ui-react'


const InputSearchHomePage = () => (
  <Input 
  
  icon={<Icon name='search' inverted circular link color="purple" />}
  
   placeholder='Encuentra cuidadores cerca...'
   style={{width: '500px', height:'40px', marginLeft: '50px'}}
   />
)

export default InputSearchHomePage
import React from 'react'
import { Icon, Input } from 'semantic-ui-react'


export const InputSearchHomePage = () => (
  <Input

    icon={<Icon name='search' inverted circular link color="purple" />}

    placeholder='Encuentra cuidadores cerca...'
    style={{ width: '500px', height: '40px', marginLeft: '33%', marginTop: '400px' }}
  />
)


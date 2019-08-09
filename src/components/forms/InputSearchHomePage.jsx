import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
import { css } from 'emotion'

export const InputSearchHomePage = () => (
  <Input action='Search' color="purple"

    /* icon={<Icon size='large' name='search' inverted circular link color="purple" />} */

    placeholder='Encuentra cuidadores cerca...'
    style={{ width: '850px', height: '60px', margin: '15px'/*  marginLeft: '33%', marginTop: '400px' */ }}
  />
)


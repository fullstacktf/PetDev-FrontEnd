import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const MiniBoxIcon = () => (
  <Step.Group>
    <Step>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default MiniBoxIcon

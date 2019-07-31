    
import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid className="container2" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 300}}>
      <Header as='h2' color='grey' textAlign='center'>
        <Icon name="sign-in" color="purple" /> Login Fanimals
      </Header>
      <Form size='big' success>
        
          <Form.Input  icon='user'  iconPosition='left' placeholder='E-mail:' />
          <Form.Input
            
            icon='lock'
            iconPosition='left'
            placeholder='Password:'
            type='password'
          />

          <Button color='purple' fluid size='large'>
            Submit
          </Button>
       
      </Form>
     
    </Grid.Column>
  </Grid>
)

export default LoginForm
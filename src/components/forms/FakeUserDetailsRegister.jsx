import React from 'react'
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const FakeUserDetailsRegister = () => (
  <Grid className="container2" textAlign='center'  style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 300 }}>
      <Header as='h2' color='grey' textAlign='center'>
        <Icon style={{marginLeft: '20px'}} name="sign-in" color="purple" /> Register
      </Header>
      <Form style={
        {border: '1px solid grey', 
        borderRadius:'5px', 
        padding: '10px', 
        background: 'whitesmoke',
        boxShadow: '0.5px 0.5px 5px grey'}} size='big' success>

        <Form.Input  placeholder='Name...' />
        <Form.Input  placeholder='Lastname...' />
        <Form.Input type='email'  placeholder='Email...' />
        
        <Form.Input
          icon='lock'
          iconPosition='left'
          placeholder='Password:'
          type='password'
        />
        <Link to="/secondsignup"><Button color='purple' fluid size='large'>Next</Button></Link>
       
      

      </Form>

    </Grid.Column>
  </Grid>
)

export default FakeUserDetailsRegister
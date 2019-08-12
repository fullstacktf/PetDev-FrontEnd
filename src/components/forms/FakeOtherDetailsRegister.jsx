import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react'

const FakeOtherDetailsRegister = () => (
  <Grid className="container2" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 300 }}>
      <Header as='h2' color='grey' textAlign='center'>
        <Icon name="sign-in" color="purple" /> Register
      </Header>
      <Form
      style={
        {border: '1px solid grey', 
        borderRadius:'5px', 
        padding: '10px', 
        background: 'whitesmoke',
        boxShadow: '0.5px 0.5px 5px grey'}}
      size='big' success>

        <Form.Input  placeholder='Short Description...' />
        <Form.Input  placeholder='Pet Preferences...'/>
        <Form.Input  placeholder='Pet...'/>
        <Form.Input  placeholder='Pet Name'/>
        
        <Link to="/UserProfile"><Button color='purple' size='large'>Submit</Button></Link>
        <Link to="/secondsignup"><Button color="grey" size='large'>Back</Button></Link>
      

      </Form>

    </Grid.Column>
  </Grid>
)

export default FakeOtherDetailsRegister
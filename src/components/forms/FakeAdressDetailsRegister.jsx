import React from 'react'
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const FakeAdressDetailsRegister = () => (
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

        <Form.Input  placeholder='Country...' />
        <Form.Input  placeholder='Province...'/>
        <Form.Input  placeholder='Adress Line...'/>
        <Form.Input  placeholder='Postal Code...'/>
        
        <Link to="/firstsignup"><Button color="grey"  size='large'>Back</Button></Link>
        <Link to="/thirdsignup"><Button color='purple'  size='large'>Next</Button></Link>
       
      

      </Form>

    </Grid.Column>
  </Grid>
)

export default FakeAdressDetailsRegister
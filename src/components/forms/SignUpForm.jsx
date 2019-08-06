import React from 'react';
import { Button, Form, Grid, Input , Header, Icon, Divider, Segment } from 'semantic-ui-react';
import styled from '@emotion/styled';

import DropdownCountry from './DropdownCountries';

const FormsContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items:center; 
  height: 100vh;
  width: 66vw;
  margin: auto;

/*   border: 1px solid red; */

`;
const LatLngContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const DataContainer= styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  height: 80px;
`
export const SignUpForm = () => (

    
   /*  <Header as='h2' color='white' textAlign='center'>
        <Icon name="signup" color="purple" />
        Unete a nosotros!
        </Header> */
      <React.Fragment>
        
      {/* <FormsContainer> */}
      <Grid columns="equal" >
      <Grid.Column >
      <Form size='small' onSubmit= {console.log("hola")} success>
        <Form.Field>
          <label>E-mail</label>
        
            <Input style={{ width:"150px" }}  placeholder='E-mail' />
            <Input style={{ width:"150px" }} size="small" placeholder='Confirma tu e-mail' />
          
        </Form.Field>
        <Form.Field>
          <label>Password</label>
        
            <Input style={{ width:"150px" }} size="small" type="password"placeholder='Password' />
            <Input style={{ width:"150px" }} size="small" type="password" placeholder='Confirma tu password' />
          
        </Form.Field>
        
        <LatLngContainer>
          <Form.Input style={{ width:"150px" }} size="small" style={{width:"50px"}}fluid placeholder='Lat: ' />
          <Form.Input style={{ width:"150px" }} size="small" style={{width:"50px"}}fluid placeholder='Lng: ' />
        </LatLngContainer>

      </Form>
      </Grid.Column>
    
      <Grid.Column>
      <Form>
      <Form.Field>
          <label>E-mail</label>
        
            <Input style={{ width:"150px" }} size="small" placeholder='E-mail' />
            <Input style={{ width:"150px" }} size="small" placeholder='Confirma tu e-mail' />
          
        </Form.Field>
        <Form.Field>
          <label>Password</label>
        
            <Input style={{ width:"150px" }} size="small" type="password"placeholder='Password' />
            <Input style={{ width:"150px" }} size="small" type="password" placeholder='Confirma tu password' />
          
        </Form.Field>
        <Form.Field>
          <label>Password</label>
        
            <Input style={{ width:"150px" }} size="small" type="password"placeholder='Password' />
            <Input style={{ width:"150px" }} size="small" type="password" placeholder='Confirma tu password' />
          
        </Form.Field>
        <Form.Field>
          <label>Password</label>
        
            <Input style={{ width:"150px" }} size="small" type="password"placeholder='Password' />
            <Input style={{ width:"150px" }} size="small" type="password" placeholder='Confirma tu password' />
          
        </Form.Field>
        
        <LatLngContainer>
          <Form.Input style={{ width:"150px" }} size="small" style={{width:"50px"}}fluid placeholder='Lat: ' />
          <Form.Input style={{ width:"150px" }} size="small" style={{width:"50px"}}fluid placeholder='Lng: ' />
        </LatLngContainer>

        

      </Form>
      </Grid.Column>
      </Grid>
      
{/*       </FormsContainer> */}
      <Button style = {{width:"150px", margin: "auto"}} type='submit' color='purple' fluid size='large'>
      ¡Comienza!
      </Button>
    </React.Fragment>
      
)

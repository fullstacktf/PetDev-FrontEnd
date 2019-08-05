import React from 'react'
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react'

import DropdownCountry from './DropdownCountries';

export const SignUpForm = () => (
  <Grid className="container2" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 300 }}>
      <Header as='h2' color='grey' textAlign='center'>
        <Icon name="signup" color="purple" /> Unete a nosotros!
      </Header>
      <Form size='small' success>

        <Form.Input fluid placeholder='Nombre:' />
        <Form.Input fluid placeholder='Apellidos:' />
        <DropdownCountry />
        <Form.Input fluid placeholder='Dirección:' />
        <Form.Input type="date" fluid />
        <Form.Input fluid placeholder='E-mail:' />
        <Form.Input fluid placeholder='Mascotas:' />
        <Form.Input placeholder='Contraseña:' type='password' />
        <Form.Input placeholder='Reescribe tu contraseña:' type='password' />


        <Button color='purple' fluid size='large'>
          Comienza!
          </Button>

      </Form>

    </Grid.Column>
  </Grid>
)


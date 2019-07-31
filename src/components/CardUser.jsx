import React from 'react'
import { Card, Icon, Image,  } from 'semantic-ui-react'

import RatingUser from './RatinUser'

const UserCard = () => (

  <Card style={{marginLeft: '30px'}} className="card1"color="purple">
    
    <Card.Content>
    
      <Card.Header>Aaron</Card.Header>
      <Card.Meta>
        <span className='date'>Se unió en 2019</span>
      </Card.Meta>
      <Card.Description>
        Dirección: C/ Sargento Provisional nº16 3ºIzda
      </Card.Description>
      <Card.Description>
        Tipo de Vivienda: piso.
      </Card.Description>
      <Card.Content style={{paddingTop: '20px'}}>
        <Icon name="edit outline"/>
        Persona amantes de los animales, veterinario y desarrollador de fanimals
      </Card.Content>
      
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='moon' />
        5 Noches Pendientes
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='upload' />
        Edita tu imagen de perfil
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='hand peace' />
        Número de mascotas: 2
      </a>
    </Card.Content>
    <Card.Content>
        <RatingUser/>
    </Card.Content>
  </Card>
)

export default UserCard
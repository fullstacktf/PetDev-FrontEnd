import React from 'react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'
import photo from '../../assets/matthew.png'
import '../../UserProfile.css'
import MiniMap from '../maps/MiniMap';
import RatingUser from './RatingUser'

const UserCardProfile = () => (
    <Card>
        <Image src={photo} wrapped ui={false} />
        <Card.Content>
            <Card.Header>Miguel <Label as='a'>15  <Icon name="paw" /></Label></Card.Header>
            <Card.Content style={{ paddingTop: '20px' }}>
                <Icon name="edit outline" />
                Persona amantes de los animales, veterinario y desarrollador de fanimals
      </Card.Content>
            {/* <Card.Description>
                Miguel es un artista del pop.
      </Card.Description> */}
        </Card.Content>
        <Card.Meta>
            <span className='date'>Se unió en 2019</span>
        </Card.Meta>
        <Card.Content>
            <RatingUser />
        </Card.Content>
        <Card.Content extra>
            <a href="http://google.com">
                <Icon name='user' />
                22 Friends
            </a>
        </Card.Content>
        <Card.Content extra>
            <a href="http://google.com">
                <Icon name='upload' />
                Edita tu imagen de perfil
      </a>
        </Card.Content>
        <Card.Content extra>
            <a href="http://google.com">
                <Icon name='hand peace' />
                Número de mascotas: 2
      </a>
        </Card.Content>
        <Card.Content extra>
            <div style={{ alignItems: 'center' }}>
                <MiniMap></MiniMap>
            </div>
        </Card.Content>
    </Card>
)

export default UserCardProfile
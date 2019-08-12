import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react';

const FeedUsers = () => (

  <Container style={
    {
      border: `1px solid grey`,
      padding: '40px',
      background: 'whitesmoke',
      borderRadius: '5px',
      marginBottom: '20px',
      boxShadow: '0.5px 0.5px 5px grey'
    }
  }>
    <Comment.Group>
      <Header as='h3' dividing>
        Comments
    </Header>

      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Manuel</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>Maravilloso!</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Mena</Comment.Author>
          <Comment.Metadata>
            <div>Yesterday at 12:30AM</div>
          </Comment.Metadata>
          <Comment.Text>
            <p>Una experiencia única, volveremos a repetir si o si.</p>
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Jenny</Comment.Author>
              <Comment.Metadata>
                <div>Just now</div>
              </Comment.Metadata>
              <Comment.Text>Dejé a mi jirafa y vino muy contenta, no para de sonreír.</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Comment>

      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Joe</Comment.Author>
          <Comment.Metadata>
            <div>5 days ago</div>
          </Comment.Metadata>
          <Comment.Text>No hay nada mejor que encontrar gente de confianza a tu alrededor, nunca imaginé que mi vecino cuidaría a mi perro.</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

      <Form reply>
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>
  </Container>

)

export default FeedUsers

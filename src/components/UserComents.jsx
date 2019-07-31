import React, { Component } from 'react'
import { Checkbox, Comment } from 'semantic-ui-react'

export default class UserComents extends Component {
  state = { collapsed: true }

  handleCheckbox = (e, { checked }) => this.setState({ collapsed: checked })

  render() {
    const { collapsed } = this.state

    return (
      <div>
        <Checkbox defaultChecked label='Ver más...' onChange={this.handleCheckbox} style={{width: "100px", marginTop: 'auto', marginLeft: '300px'}} />

        <Comment.Group size='large' style={{height: "100px", width: "400px", marginTop: '20px', marginLeft: '300px'}}>
          <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Migue</Comment.Author>
              <Comment.Metadata>
                <span>2 days ago</span>
              </Comment.Metadata>
              <Comment.Text>
                No tenía perro y me lo perdió
              </Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>

            <Comment.Group collapsed={collapsed}>
              <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Ale</Comment.Author>
                  <Comment.Metadata>
                    <span>1 day ago</span>
                  </Comment.Metadata>
                  <Comment.Text>Y se comio a mi gato en un rito satánico</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Darío</Comment.Author>
                      <Comment.Metadata>
                        <span>20 minutes ago</span>
                      </Comment.Metadata>
                      <Comment.Text>A mi iguana la mató de calor</Comment.Text>
                      <Comment.Actions>
                        <a>Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>
            </Comment.Group>
          </Comment>
        </Comment.Group>
      </div>
    )
  }
}
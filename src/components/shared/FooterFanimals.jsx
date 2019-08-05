import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Footer extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{marginLeft: '500px'}} color="purple" size="large" fixed="bottom" text horizontal>
        <Menu.Item header>Fanimals.me</Menu.Item>
        <Menu.Item
          name='About Us'
          active={activeItem === 'About Us'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Privacy'
          active={activeItem === 'Privacy'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

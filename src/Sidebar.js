import React, { Component } from 'react'
import App from './App.js'
import { Sidebar, Segment, Card, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarRightOverlay extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            width=''
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Card.Group>
              <Card>
                <Image src={require('../public/images/poulet.png')} />
                <Card.Content>
                  <Card.Description>
                    Herta Crust
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Sidebar>
          <Sidebar.Pusher>
            <App />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarRightOverlay

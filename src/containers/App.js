import React, { Component } from 'react';
import './App.css';
import ICard from '../components/ICard'
import { Card, Divider, Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (<div className="App">
          <div className="App-header">
              Pick an ingredient!
            </div>
            <div className="App-Ingredients">
              <Card.Group itemsPerRow={6}>
                      <ICard image="chicken.png" name="chicken"/>

                      <ICard name="beef" />


              </Card.Group>
            </div>
              <Divider horizontal> </Divider>
              <Button animated='vertical'>
                <Button.Content hidden>Validate</Button.Content>
                <Button.Content visible>Finished ?</Button.Content>
              </Button>
          </div>
    );
  }
}

export default App;

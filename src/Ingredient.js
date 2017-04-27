import React, { Component } from 'react';
import './Ingredient.css';
import { Card} from 'semantic-ui-react'

class Ingredient extends Component {
  render() {
    return (
      <Card>
        <Image src={require('../public/images/quiche.png')} />
        <Card.Content>
          <Card.Description>
            Herta Crust
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Ingredient;

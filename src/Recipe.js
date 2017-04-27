import React, { Component } from 'react';
import Ingredient from './Ingredient'
import './Recipe.css';
import { Grid, Card, Image, Divider, Button } from 'semantic-ui-react'

class Recipe extends Component {
  render() {
    return (
      <div className="Recipe">
        <div className="Recipe-Header">
          <p>Suggested Recipes</p>
        </div>
        <div className="Recipe-List">
          <Card>
            <Image src={require('../public/images/poulet.png')} />
            <Card.Content>
              <Card.Header>
                Name of the recipe
              </Card.Header>
              <Card.Description>
                Decription of the recipe
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src={require('../public/images/poulet.png')} />
            <Card.Content>
              <Card.Header>
                Name of the recipe
              </Card.Header>
              <Card.Description>
                Decription of the recipe
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src={require('../public/images/poulet.png')} />
            <Card.Content>
              <Card.Header>
                Name of the recipe
              </Card.Header>
              <Card.Description>
                Decription of the recipe
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

export default Recipe;

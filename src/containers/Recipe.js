import React, { Component } from 'react';
import RCard from '../components/RCard'
import './Recipe.css';
import { Card } from 'semantic-ui-react'

class Recipe extends Component {
  render() {
    return (
      <div className="Recipe">
        <div className="Recipe-Header">
          <p>Suggested Recipes</p>
        </div>
        <div className="Recipe-List">
        <Card.Group itemsPerRow={1}>
          <RCard image="poulet.png" name="poulet" description="poulet miam"/>
          <RCard name="viande" description="poulet miam"/>
        </Card.Group>
        </div>
      </div>
    );
  }
}

export default Recipe;

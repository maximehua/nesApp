import React, {Component} from 'react';
import App from './containers/App';
import Recipe from './containers/Recipe'
import { Grid } from 'semantic-ui-react'



class Main extends Component {
  render() {
    return (
      <Grid stretched>
        <Grid.Column width={11}>
          <App />
        </Grid.Column>
        <Grid.Column width={5}>
          <Recipe />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Main

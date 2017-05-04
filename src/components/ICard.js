import React from 'react';
import { Card, Image } from 'semantic-ui-react'



class ICard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToogleOn: true};

    //This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <Image src={`/public/images/`+this.props.image} />
        <Card.Content>
          <Card.Description>
            {this.state.isToggleOn ? 'Selected' : 'Non selected' }
            {this.props.name}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default ICard

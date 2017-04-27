import React, { Component } from 'react';
import Ingredient from './Ingredient'
import './App.css';
import { Grid, Card, Image, Divider, Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
          <div className="App">
            <div className="App-header">
              Pick an ingredient!
            </div>
              <Card.Group itemsPerRow={6}>
                      <Card>
                        <Image src={require('../public/images/poulet.png')} />
                        <Card.Content>
                          <Card.Description>
                            Chicken
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/beef.png')} />
                        <Card.Content>
                          <Card.Description>
                            Ground Beef
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/lardons.png')} />
                        <Card.Content>
                          <Card.Description>
                            Herta Lardons
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/rice.png')} />
                        <Card.Content>
                          <Card.Description>
                            Rice
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/tomato.png')} />
                        <Card.Content>
                          <Card.Description>
                            Tomatoes
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/carrots.png')} />
                        <Card.Content>
                          <Card.Description>
                            Carrots
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/onions.png')} />
                        <Card.Content>
                          <Card.Description>
                            Onions
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/eggs.png')} />
                        <Card.Content>
                          <Card.Description>
                            Eggs
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/potatoes.png')} />
                        <Card.Content>
                          <Card.Description>
                            Potatoes
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/salmon.png')} />
                        <Card.Content>
                          <Card.Description>
                            Salmon
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/tendre-noix.png')} />
                        <Card.Content>
                          <Card.Description>
                            Herta Ham
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/pizza.png')} />
                        <Card.Content>
                          <Card.Description>
                            Pizza Dough
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/mozzarella.png')} />
                        <Card.Content>
                          <Card.Description>
                            Mozzarella
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/bacon.png')} />
                        <Card.Content>
                          <Card.Description>
                            Herta Bacon
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/kubor.png')} />
                        <Card.Content>
                          <Card.Description>
                            Maggi Kub Or
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/mushrooms.png')} />
                        <Card.Content>
                          <Card.Description>
                            Mushrooms
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/pasta.png')} />
                        <Card.Content>
                          <Card.Description>
                            Pasta
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card>
                        <Image src={require('../public/images/quiche.png')} />
                        <Card.Content>
                          <Card.Description>
                            Herta Crust
                          </Card.Description>
                        </Card.Content>
                      </Card>
              </Card.Group>
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

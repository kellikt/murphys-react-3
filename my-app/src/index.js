import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Dropdown, Icon, Grid, Item } from 'semantic-ui-react';

class TopMenu extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
        <Menu borderless className="ui borderless topmenu container menu">
          <Container>
            <Menu.Item
                name='facebook'
                active={activeItem === 'facebook'}
                onClick={this.handleItemClick}>
              <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png" className="ui image"/>
            </Menu.Item>
            <Menu.Item
                name='facebook'
                active={activeItem === 'facebook'}
                onClick={this.handleItemClick}
                className="right text">
              Home
            </Menu.Item>
            <Dropdown item text="About us">
              <Dropdown.Menu>
                <Dropdown.Item>
                  test
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
                name='facebook'
                active={activeItem === 'facebook'}
                onClick={this.handleItemClick}
                className="text">
              St. Patrick's Day
            </Menu.Item>
            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>
                  test
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
                name='facebook'
                active={activeItem === 'facebook'}
                onClick={this.handleItemClick}
                className="text">
              Bar
            </Menu.Item>
            <Menu.Item
                name='facebook'
                active={activeItem === 'facebook'}
                onClick={this.handleItemClick}
                className="item">
              <Icon className="search icon"/>
            </Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class Middle extends React.Component {

  render() {
    return (
        <div className="middle-background">
          <Container className="ui main container">
            <Grid columns={2} divide>
              <Grid.Row>
                <Grid.Column>
                  <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"/>
                </Grid.Column>
                <Grid.Column>
                  <Item.Description className="main-text">
                    A traditional downtown saloon and eatery located in the Honolulu Financial District,
                    just one block off the waterfront, Murphy's has been a haven for mariners, businessmen and locals
                    since
                    1891.
                  </Item.Description>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

class FooterMenu extends React.Component {

  render() {
    return (
        <div class="footer">
          <Container>
            <Grid columns={3} divide>
              <Grid.Row>
                <Grid.Column className="bottom-text">
                  <Item.Description>
                    Lunch
                  </Item.Description>
                  <hr/>
                  <Item.Description>Monday - Friday: 11:00am - 2:30pm</Item.Description>
                  <Item.Description>Saturday-Sunday: Not open for lunch</Item.Description>
                </Grid.Column>
                <Grid.Column className="bottom-text">
                  <Item.Description>Bar</Item.Description>
                  <hr/>
                  <Item>Monday - Friday from 11:00am</Item>
                  <Item>Saturday - Sunday from 4:00pm</Item>
                </Grid.Column>
                <Grid.Column className="bottom-text">
                  <Item>Dinner</Item>
                  <hr/>
                  <Item>Monday - Saturday: 5:30pm - 10:00pm</Item>
                  <Item>Sunday: 5:00pm - 9:00pm</Item>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <Murphys/>
    , document.getElementById('root'));
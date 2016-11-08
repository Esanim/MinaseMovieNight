import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem, Button, FormGroup, FormControl } from 'react-bootstrap';
import * as AuthActions from '../../actions/authActions';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import _find from 'lodash';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  handleSignout(event) {
    this.props.signOutUser();
  }

  renderAuthLinks() {
    if (this.props.authenticated == true) {
      return [
        <NavDropdown key={5} eventKey={5} title="Profile" id="basic-nav-dropdown">
          <MenuItem eventKey={5.1}>
            <LinkContainer to={'/users/' + 'minase' + '/movies'} key={11}>
              <NavItem eventKey={5.11}>My movies</NavItem>
            </LinkContainer>
          </MenuItem>
          <MenuItem eventKey={5.2}>
            <LinkContainer to="/user:id/watchlist" key={11}>
              <NavItem eventKey={5.22}>Watchlist</NavItem>
            </LinkContainer>
          </MenuItem>
          <MenuItem eventKey={5.3}>
            <LinkContainer to="/user:id/settings" key={11}>
              <NavItem eventKey={5.33}>Settings</NavItem>
            </LinkContainer>
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={5.4} onClick={() => this.handleSignout()} >Sign Out</MenuItem>
        </NavDropdown>
      ];
    } else {
      return [
        <LinkContainer to="/login" key={11}>
          <NavItem eventKey={11}>Sign In</NavItem>
        </LinkContainer>,
        <LinkContainer to="/register" key={12} >
          <NavItem eventKey={12}>Sign Up</NavItem>
        </LinkContainer>
      ];
    }
  }

render(){
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
          <LinkContainer to="/">
            <a href="/">Main Site</a>
          </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

            <LinkContainer to="/movies">
              <NavItem eventKey={2}>Movies</NavItem>
            </LinkContainer>

            <LinkContainer to="/users">
              <NavItem eventKey={3}>Users</NavItem>
            </LinkContainer>

            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              {' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>

          </Nav>
          <Nav pullRight>
            {this.renderAuthLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated
    };
  }

export default connect(mapStateToProps, AuthActions)(Header);

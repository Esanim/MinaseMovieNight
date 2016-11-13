import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem, Button, FormGroup, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import _find from 'lodash';
import * as movieActions from '../../actions/movieActions';
import * as authActions from '../../actions/authActions';
import TextInput from './TextInput';
import {bindActionCreators} from 'redux';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      search: ''
    };

    //this.setValue = this.setValue.bind(this);
    this.search = this.search.bind(this);
    this.setValueClear = this.setValueClear.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout(event) {
    this.props.actions.signOutUser();
  }

  setValueClear() {
     this.setState({search: ''});
     ReactDOM.findDOMNode(this.refs.val).value = '';
     this.props.actions.filterMovies("");
   }

   search(event) {
     event.preventDefault();
     this.props.actions.filterMovies(this.state.search);
   }

   setValue(field, event) {
      this.setState({search: event.target.value});
    }

  renderAuthLinks() {
    if (this.props.authenticated == true) {
      return [
        <NavDropdown key={5} eventKey={5} title="Profile" id="basic-nav-dropdown">

            <LinkContainer to={'/users/' + 'minase' + '/movies'} key={11}>
              <NavItem eventKey={5.11}>My movies</NavItem>
            </LinkContainer>

            <LinkContainer to="/user:id/watchlist" key={12}>
              <NavItem eventKey={5.22}>Watchlist</NavItem>
            </LinkContainer>

            <LinkContainer to="/user:id/settings" key={13}>
              <NavItem eventKey={5.33}>Settings</NavItem>
            </LinkContainer>

          <MenuItem divider />
          <MenuItem eventKey={5.4} onClick={this.handleSignout} >Sign Out</MenuItem>
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
            <a href="/" onClick = {this.setValueClear}>Main Site</a>
          </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

            <LinkContainer to="/movies"  >
              <NavItem eventKey={2} onClick = {this.setValueClear}>Movies</NavItem>
            </LinkContainer>

            <LinkContainer to="/users">
              <NavItem eventKey={3} onClick = {this.setValueClear}>Users</NavItem>
            </LinkContainer>

            <Navbar.Form pullLeft>
            <form onSubmit={this.search} className="search">
              <FormGroup controlId="search">
                <FormControl type="text" onChange={this.setValue.bind(this, 'search')} placeholder="Search Movies..." ref="val" />
              </FormGroup>
              {' '}
              <Button type="submit">Go!</Button>
              </form>
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

Header.propTypes = {
    authenticated: PropTypes.bool,
    signOutUser: PropTypes.func,
    filterMovies: PropTypes.func,
    actions : PropTypes.Object
  };

function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated
    };
  }
  //
  // function mapDispatchToProps(dispatch) {
  //   return {
  //     signOutUser: dispatch(authActions.signOutUser),
  //     filterMovies: dispatch(movieActions.filterMovies)
  //   };
  // }

  function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, movieActions, authActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

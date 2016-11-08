import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return (
      <Navbar inverse>
        <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/terms">
            <NavItem eventKey={0}>Terms of Use</NavItem>
          </LinkContainer>

          <LinkContainer to="/contact">
            <NavItem eventKey={1}>Contact</NavItem>
          </LinkContainer>
        </Nav>
          <Navbar.Text pullRight>
            MinaseMovieNight, Copyright, 2016
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  };

}
export default Footer;

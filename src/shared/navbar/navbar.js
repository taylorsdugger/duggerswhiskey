import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import AuthLoginProfile from '../../auth/login-profile';

class AppNavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect staticTop>
        <Navbar.Header>
          <Navbar.Brand className="whiteText">
            <a href="/">DUGGER'S WHISKEY</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem className="whiteText" eventKey={1} href="/whiskey">
              WHISKEY
            </NavItem>
            <NavItem className="whiteText" eventKey={2} href="/contactUs">
              CONTACT US
            </NavItem>
            <NavItem className="whiteText" eventKey={3} href="/whereToBuy">
              WHERE TO BUY
            </NavItem>
            <NavItem className="whiteText" eventKey={4} href="/reviews">
              REVIEWS
            </NavItem>
            <NavItem >
              <AuthLoginProfile/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default AppNavBar
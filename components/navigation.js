import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Link from 'next/link';

import SignOut from './signout';
//import { auth } from '../firebase';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount = () => {};

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const displayName = this.props.authUser
      ? this.props.authUser.email
      : 'User Name';
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img
              src="/static/logo.png"
              alt="The Ambrose School Check-In Logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/dash">Dashboard</NavLink>
              </NavItem>
              {this.props.authUser ? (
                <LoggedInMenu displayName={displayName} />
              ) : (
                <LoginLink />
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const LoggedInMenu = ({ displayName }) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      {displayName}
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>
        <Link href="/profile">
          <a className="nav-link">Profile</a>
        </Link>
      </DropdownItem>

      <DropdownItem divider />
      <DropdownItem>
        <Link href="/login">
          <a className="nav-link" onClick={SignOut}>
            Logout
          </a>
        </Link>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const LoginLink = () => (
  <NavItem>
    <Link href="/login">
      <a className="nav-link">Login</a>
    </Link>
  </NavItem>
);

export default Navigation;

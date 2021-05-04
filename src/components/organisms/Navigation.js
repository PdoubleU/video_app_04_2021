import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Navi() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="fixed-top bg-dark" light expand="md">
      <NavbarBrand className="text-light" tag={Link} to="/">
        Video App
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="text-light" tag={Link} to="/" onClick={toggle}>
              Main
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="text-light"
              tag={Link}
              to="/movie-list"
              onClick={toggle}
            >
              List
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navi;

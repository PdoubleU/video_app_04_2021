import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Navi({ clickHandler, value }) {
  return (
    <Navbar color="inverse" light expand="md">
      <NavbarBrand href="/">Video App</NavbarBrand>
      <NavbarToggler onClick={clickHandler} />
      <Collapse isOpen={value} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Add new film</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Load default list</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navi;

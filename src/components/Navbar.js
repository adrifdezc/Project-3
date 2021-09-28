import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Search from "./Search";

function NavbarComp() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>COCKTAIL APP</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="/profile">
                <Nav.Link href="#profile">Profile</Nav.Link>
              </Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <Link to="/cart">
                  <NavDropdown.Item href="#cart">
                    Shopping Cart
                  </NavDropdown.Item>
                </Link>
                {/* <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Search />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;

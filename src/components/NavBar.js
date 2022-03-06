import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/apiRequest/authRequest";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    logout(dispatch);
    navigate("/login");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          Learn App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/english">
              English
            </Nav.Link>
            <Nav.Link as={Link} to="/math">
              Math
            </Nav.Link>
            <Nav.Link as={Link} to="/program">
              Program
            </Nav.Link>
          </Nav>
          <Button
            variant="danger"
            className="ms-auto"
            onClick={handleLogoutUser}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

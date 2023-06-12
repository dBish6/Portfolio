import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="custom" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            David Bishop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Projects" className="nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/todoproject/main">
                  Create a To-Do List
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/about">
                About Me
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

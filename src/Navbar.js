import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css'; // Import the CSS file
import logo from './assets/Portfolio-logo.png';

const PortfolioNavbar = () => {
  return (
    <Navbar
      className="navbar-custom"
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="rounded-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;

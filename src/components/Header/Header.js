import React from "react";
import "./header.scss";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" id="logo">
          Al-Wesam Store
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

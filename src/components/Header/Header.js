import React from "react";
import "./header.scss";
import { Navbar, Container, NavItem } from "react-bootstrap";

import { connect } from "react-redux";

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" id="logo">
          Al-Wesam Store
        </Navbar.Brand>
        <NavItem style={{ color: "white" }}>Cart({props.cart.length})</NavItem>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);

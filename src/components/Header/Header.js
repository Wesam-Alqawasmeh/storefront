import React from "react";
import "./header.scss";
import { Navbar, Container, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand id="logo">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Al-Wesam Store
          </Link>
        </Navbar.Brand>

        <NavItem href="/cart" style={{ color: "white", cursor: "pointer" }}>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            Cart({props.cart.length})
          </Link>
        </NavItem>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);

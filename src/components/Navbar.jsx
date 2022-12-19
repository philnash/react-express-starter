import React, { useEffect } from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { LinkContainer } from "react-router-bootstrap";
import "../css/scss/main.css";
// import { toggleMenu } from './main'

function Navigation() {
  return (
    <div className="navbar-main" expand="bg">
    <span>
      <Navbar fixed="top" expand="lg">
        {/* <span className="menu-btn__burger"></span> */}
        <Container>
          {/* <Navbar.Brand href="/home">HOME</Navbar.Brand> */}
          <Nav>
            <NavLink  href="/home" to="./pages/home">HOME
              {/* <i className="fa-solid fa-house"></i> */}
            </NavLink>
            <NavLink href="/products" to="./pages/products">
              PRODUCTS
            </NavLink>
            <NavLink href="/aboutus" to="./pages/about_us">
              ABOUT US
            </NavLink>
            <NavLink href="/profile" to="./profile">
              ACCOUNT
            </NavLink>

            {/* <NavLink href="/profile">
              <i className="fa-regular fa-circle-user"></i>
            </NavLink> */}
            {/* <button>
            <NavLink href="/login" to="./pages/login">
            Log In
            </NavLink>
            </button>
            <button>
            <NavLink href="/createuser" to="./pages/createuser">
            Create an Account
            </NavLink>
          </button> */}
            <NavLink href="/checkout" className="shoppingcarticon">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
          </span>
    </div>
  );
}

export default Navigation;
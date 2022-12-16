import React from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar className="Navbar">
      <Nav>
        <Navbar>
          <NavLink href="/home" to="./pages/home">
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink href="/products" to="./pages/products">
            Products
          </NavLink>
          <NavLink href="/aboutus" to="./pages/about_us">
            About Us
          </NavLink>
          {/* I added the fontawesome icons for fun. Feel free to remove them or use them */}
          <NavLink href="/profile">
            <i className="fa-regular fa-circle-user"></i>
          </NavLink>
          <button>
            <NavLink href="/login" to="./pages/login">
              Login
            </NavLink>
          </button>
          <button>
            <NavLink href="/createuser" to="./pages/createuser">
              Create an Account
            </NavLink>
          </button>
          <NavLink href="/checkout">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </NavLink>
        </Navbar>
      </Nav>
    </Navbar>
  );
}

export default Navigation;

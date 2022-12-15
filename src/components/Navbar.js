import React from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar className="Navbar">
      <Nav>
        <NavLink href="/home" to="./pages/home" className="Navbar">
          <i class="fa-solid fa-house"></i>
        </NavLink>

        <NavLink href="/products" to="./pages/products" className="Navbar">
          Products
        </NavLink>

        <NavLink href="/aboutus" to="./pages/about_us" className="Navbar">
          About Us
        </NavLink>

        {/* I added the fontawesome icons for fun. Feel free to remove them or use them */}
        <NavLink href="/profile" className="Navbar">
          <i class="fa-regular fa-circle-user"></i>
        </NavLink>

        <button>
          <NavLink href="/login" to="./pages/login" className="Navbar">
            Login
          </NavLink>
        </button>

        <button>
          <NavLink href="/createuser" to="./pages/createuser" className="Navbar">
            Create an Account
          </NavLink>
        </button>

        <NavLink href="/checkout" className="Navbar">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default Navigation;

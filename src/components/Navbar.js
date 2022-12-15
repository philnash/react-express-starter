import React from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function Navigation() {
  return (
        <Navbar className="Navbar">
          <NavLink href="/home" to="./pages/home">
            <i class="fa-solid fa-house"></i>
          </NavLink>
          <br/>
          <NavLink href="/products" to="./pages/products">
            Products
          </NavLink>
          <br/>
          <NavLink href="/aboutus" to="./pages/about_us">
            About Us
          </NavLink>
          <br/>
          {/* I added the fontawesome icons for fun. Feel free to remove them or use them */}
          <NavLink href="/profile">
            <i class="fa-regular fa-circle-user"></i>
          </NavLink>
          <br/>
          <button>
            <NavLink href="/login" to="./pages/login">
              Login
            </NavLink>
          </button>
          <br/>
          <button>
            <NavLink href="/createuser" to="./pages/createuser">
              Create an Account
            </NavLink>
          </button>
          <br/>
          <NavLink href="/checkout">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </NavLink>
        </Navbar>
  );
}

export default Navigation;
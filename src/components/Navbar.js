import React from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";
// export const NavBar = Navbar

function Navigation(){
  return (
    <div>
      <Nav>
        <Navbar>
          <NavLink to="./pages/home">
            Home
          </NavLink>
          <NavLink to="./pages/products">
            Products
          </NavLink>
          <NavLink to="./pages/about_us">
            About Us
          </NavLink>
          <NavLink to="./pages/login">
             Login
          </NavLink>
        </Navbar>
      </Nav>
    </div>
  );
};

export default Navigation;

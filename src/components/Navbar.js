import React from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";
export const NavBar = Navbar

function Navigation(){
  return (
    <div>
      <Nav>
        <Navbar>
          <NavLink to="./pages/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="./pages/products" activeStyle>
            Products
          </NavLink>
          <NavLink to="./pages/about_us" activeStyle>
            About Us
          </NavLink>
          <NavLink to="./pages/login" activeStyle>
             Login
          </NavLink>
        </Navbar>
      </Nav>
    </div>
  );
};

export default Navigation;

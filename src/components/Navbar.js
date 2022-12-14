import React from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";
// export const NavBar = Navbar

function Navigation(){
  return (
    <div>
      <Nav>
        <Navbar>
          <NavLink href="/home" to="./pages/home"><i class="fa-solid fa-house"></i>
          </NavLink>
          <NavLink href="/products" to="./pages/products">
            Products
          </NavLink>
          <NavLink href="/aboutus" to="./pages/about_us">
            About Us 
          </NavLink>
          {/* I added the fontawesome icons for fun. Feel free to remove them or use them */}
           <NavLink href="/profile"><i class="fa-regular fa-circle-user"></i></NavLink>
           <button><NavLink href="/login" to="./pages/login">
             Login
          </NavLink></button>
          <button><NavLink href="/createuser" to="./pages/createuser">
            Create an Account
          </NavLink></button>
         
          
          <NavLink href="/checkout"><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink>

         
        </Navbar>
      </Nav>
    </div>
  );
};

export default Navigation;

import React, { useEffect } from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { LinkContainer } from "react-router-bootstrap";
import '../css/scss/main.css'
// import { toggleMenu } from './main'

function Navigation() {
  return (
    
    <Navbar>
      <span className="menu-btn__burger"></span>
      <Nav className="nav">
        
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
        
          <NavLink href="/profile">
            <i className="fa-regular fa-circle-user"></i>
          </NavLink>
          <button>
            <NavLink href="/login" to="./pages/login">
              Log In
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

// function Navigation () {
//   return (
//     <><div className="menu-btn">
//     <span className="menu-btn__burger"></span>
//   </div>
//     <nav className="nav">
//         <ul className="menu-nav">
//           <li className="menu-nav__item">
//             <a href="HomePage.jsx"
//               className="menu-nav__link">
//               HOME
//             </a>
//           </li>
//           <li class="menu-nav__item">
//                     <a href="./pages/about_us" class="menu-nav__link">
//                         About Us
//                     </a>
//                 </li>
//                 <li class="menu-nav__item">
//                     <a href="./pages/products" class="menu-nav__link">
//                        Products
//                     </a>
//                 </li>
//                 <li class="menu-nav__item">
//                     <a href="./pages/login" class="menu-nav__link">
//                         Log In
//                     </a>
//                 </li>
//             </ul>
//         </nav></>
//   )
// }

// export default Navigation;
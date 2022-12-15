import React from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";

export const NavBar = Navbar

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

//


// EXPERIMENTING... Crystal

// import React from 'react'

// const Navbar = () => {
//   return (
//     <><div class="navbar-btn">
//       <span class="navbar-btn__burger"></span>
//     </div><nav class="nav">
//       <ul class="navbar-nav">
//         <li class="navbar-nav__item active">
//           <a href="HomePage.jsx" class="navbar-nav__link">
//           Home
//           </a>
//         </li>
//         <li class="navbar-nav__item">
//           <a href="ProductsPage.js" class="navbar-nav__link">
//           Products
//           </a>
//         </li>
//         <li class="navbar-nav__item">
//           <a href="AboutUsPage.js" class="navbar-nav__link">
//           About Us
//           </a>
//         </li>
//         <li class="navbar-nav__item">
//           <a href="Login.jsx" class="navbar-nav__link">
//           Log In
//           </a>
//         </li>
//       </ul>
//        </nav></>
//   )
// }

// export default Navbar

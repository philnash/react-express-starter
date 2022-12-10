const Navbar = () => {
    return (
      <>
        <Nav>
          <NavMenu>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  };
  
  export default Navbar;
  
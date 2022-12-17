import { useRef, useState, useEffect } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';



function CreateUser(){
    return (
      <div>
      <header>
        <div>
          <h1>Sign Up</h1>
          
          <form>
            <label>First Name</label>
            <input type="text" placeholder="" />
            <label>Last Name</label>
            <input type="text" placeholder="" />
            <label>Profession</label>
            <input type="text" placeholder="" />
            <label>Email</label>
            <input type="email" placeholder="" />
            <label>Password</label>
            <input type="password" placeholder="" />
            <label>Confirm Password</label>
            <input type="password" placeholder="" />
            <input type="button" value="Submit" />
          </form>
          <p>
            By clicking the Sign Up button,you agree to our <br />
            <a href="#">Terms and Condition</a> and{" "}
            <a href="#">Policy Privacy</a>
          </p>
        </div>
        <p>
          Already have an account? <a href="./login">Login here</a>
        </p>
      </header>
    </div>
    );
  };
  
  export default CreateUser
;
  
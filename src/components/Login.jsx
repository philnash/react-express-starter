import { useState } from "react";

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }

    return (
      <div className="App">
      <header className="App-header">
        <div class="login-box">
          <h1>Login</h1>
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Here"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password Here"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <br></br>
        <p class="para-2">
          Don't have an account? <a href="./createuser">Sign Up Here</a>
        </p>
      </header>
    </div>
    );
  };
  
  export default Login;
  
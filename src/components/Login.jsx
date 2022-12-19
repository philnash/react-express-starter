import { useState } from "react";

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
  // const loginResponse = await fetch("/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, password}),
  // });
  // const loginData = await loginResponse.json();
  // // handle the reponse from the backend here

  // if (loginData.success) {
  //   console.log("Successful login!");
  // }
  // else {
  //   console.error("Error logging in:", loginData.error);
  // }
    console.log(email);
    console.log(password);
  }

    return (
      <div className="App">
      <header className="App-header">
        <div className="login-box">
          <h1>Log In</h1>
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
              type="current-password"
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
        <h2>
          Don't have an account? <strong><a href="./createuser">Sign Up Here</a></strong>
        </h2>
      </header>
    </div>
    );
  };
  
  export default Login;
  
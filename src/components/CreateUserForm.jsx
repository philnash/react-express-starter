import React, { useState } from "react";
import { Form } from "react-bootstrap";

const CreateUserForm = () => {
  const [username, setusername] = useState("");
  const [firstname, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [hashedPassword, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the server using an HTTP request
  };

  return (
    <div id="createuserform" className="createuserform">
      <h2>
        Don't have an account?{" "}
        <strong>
          <a href="./createuser">Sign Up Here</a>
        </strong>
      </h2>
      <Form>
        <form onSubmit={handleSubmit}>
          <br />
          <label>
            First Name:
            <input
              type="text"
              value={firstname}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Username:
            <input
              type="text"
              placeholder="Enter a username here"
              value={username}
              onChange={(event) => setusername(event.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              value={hashedPassword}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <br />
          <input type="submit" value="Create user" />
        </form>
      </Form>
    </div>
  );
};

export default CreateUserForm;

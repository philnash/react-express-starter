// import React from "react";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateUserForm = () => {
//  const createuser = {username:"df username", email:"df email", firstname:"df first", lastname:"df last", passwordDigest: "df pw"}
//   let username, email, firstname, lastname, passwordDigest;

  const [username, setusername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [passwordDigest, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the server using an HTTP request
  };
  return (
    <div className="createuserform">
      <h1>Create An Account</h1>
      <br />
      <Form onSubmit={handleSubmit}>
      {/* <Form method="POST" action='user/createuser'> */}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label   htmlFor="username" >Username </Form.Label>
          <Form.Control
            input="username"
            id="username"
            type="text"
            value={username}
            ref="username"
            useref="username"
            name="username"
            onChange={(event) => setusername(event.target.value)}
            placeholder="Choose a username"
            autoComplete="user-name"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label   htmlFor="firstname" >First Name </Form.Label>
          <Form.Control
            type="text"
            useref="firstname"
            ref="firstname"
            value={firstname}
            id="firstname"
            onChange={(event) => setFirstname(event.target.value)}
            placeholder="First Name"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label   htmlFor="lastname" >Last Name </Form.Label>
          <Form.Control
            type="text"
            ref="lastname"
            useref="lastname"
            value={lastname}
            id="lastname"
            onChange={(event) => setLastname(event.target.value)}
            placeholder="Last Name"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label   htmlFor="email">Email address </Form.Label>
          <Form.Control
            type="email"
            value={email}
            ref="email"
            useref="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
            autoComplete="email"
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label
          htmlFor="passwordDigest"
          >Password</Form.Label>
          <Form.Control
            type="text"
            ref="passwordDigest"
            useref="passwordDigest"
            value={passwordDigest}
            autoComplete="current-password"
            id="passwordDigest"
            // onChange={(event) => setPassword(event.target.value)}
            placeholder="Choose a password"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text 
          // id="passwordHelpBlock" 
          muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" value="Submit">
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default CreateUserForm;

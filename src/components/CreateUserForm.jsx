import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateUserForm = () => {
  const [username, setusername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [hashedPassword, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the server using an HTTP request
  };

  return (
    <div className="createuserform">
      <h1>Create An Account</h1>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name </Form.Label>
          <Form.Control
            type="text"
            ref="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            placeholder="First Name"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name </Form.Label>
          <Form.Control
            type="text"
            ref="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            placeholder="Last Name"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username </Form.Label>
          <Form.Control
            type="text"
            value={username}
            ref="username"
            onChange={(event) => setusername(event.target.value)}
            placeholder="Choose a username"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address </Form.Label>
          <Form.Control
            type="email"
            value={email}
            ref="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            ref="hashedPassword"
            value={hashedPassword}
            // id="inputPassword5"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Choose a username"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" value="create user">
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default CreateUserForm;

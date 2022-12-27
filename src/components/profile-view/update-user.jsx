import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UpdateUser({ handleSubmit, handleUpdate, user }) {
  return (
    <div>
      <Form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <h4>Want to change some info?</h4>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            name="Username"
            defaultValue={user.Username}
            // onChange={(e) => handleUpdate(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="Password"
            defaultValue={user.Password}
            // onChange={(e) => handleUpdate(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="Email"
            defaultValue={user.Email}
            // onChange={(e) => handleUpdate(e)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default UpdateUser;

import React from "react";
import { useState } from "react";
import {
  Button,
  Form,
  Col,
  Row,
  Container,
  Card,
  CardGroup,
} from "react-bootstrap/";
import Form from "react-bootstrap/Form";
import "./update-user";

function UpdateUser({ handleSubmit, handleUpdate, user }) {
  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card bg="dark" text="light">
              <Card.Body>
                <Form
                  className="profile-form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <Form.Group>
                    <h4>Want to change some info?</h4>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      name="Username"
                      defaultValue={user.Username}
                      placeholder="Type your new Username"
                      className="form-control"
                      // onChange={(e) => handleUpdate(e)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      name="Password"
                      placeholder="Type your new Password"
                      className="form-control"
                      // defaultValue={user.Password}
                      // onChange={(e) => handleUpdate(e)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="Email"
                      defaultValue={user.Email}
                      placeholder="Type your Email"
                      className="form-control"
                      // onChange={(e) => handleUpdate(e)}
                    />
                  </Form.Group>
                  <Card.Footer>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-primary"
                    >
                      Update
                    </Button>
                  </Card.Footer>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

<Button variant="primary" type="submit" className="btn-login">
  Register
</Button>;

export default UpdateUser;

// return (
//   <div>
//     <Form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
//       <Form.Group>
//         <h4>Want to change some info?</h4>
//         <Form.Label>Username:</Form.Label>
//         <Form.Control
//           type="text"
//           name="Username"
//           defaultValue={user.Username}
//           // onChange={(e) => handleUpdate(e)}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Password:</Form.Label>
//         <Form.Control
//           type="password"
//           name="Password"
//           // defaultValue={user.Password}
//           // onChange={(e) => handleUpdate(e)}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Email:</Form.Label>
//         <Form.Control
//           type="email"
//           name="Email"
//           defaultValue={user.Email}
//           // onChange={(e) => handleUpdate(e)}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Update
//       </Button>
//     </Form>
//   </div>
// );
// }

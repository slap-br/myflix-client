import { useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Container,
  Col,
  Row,
  Form,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./signup-view.scss";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch("https://smclub.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    });
  };

  return (
    <Container className="formset">
      <Row>
        <Col>
          <CardGroup>
            <Card bg="dark" text="light">
              <Card.Body>
                <Card.Title> Welcome Stranger, Cadastra ai Mano!</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className="description"
                    controlId="signUpFormUsername"
                  >
                    <Form.Label className="label">Username:</Form.Label>
                    <Form.Control
                      className="formctrl"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      minLength="3"
                      placeholder="Enter your Username"
                    />
                  </Form.Group>

                  <Form.Group
                    className="description"
                    controlId="signUpFormPassword"
                  >
                    <Form.Label className="label">Password:</Form.Label>
                    <Form.Control
                      className="formctrl"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Type your Password"
                    />
                  </Form.Group>
                  <Form.Group
                    className="description"
                    controlId="signUpFormEmail"
                  >
                    <Form.Label className="label">Email:</Form.Label>
                    <Form.Control
                      className="formctrl"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Type your Email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="description"
                    controlId="signUpFormBirthday"
                  >
                    <Form.Label className="label">Birthday:</Form.Label>
                    <Form.Control
                      className="formctrl"
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Card.Footer>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-login"
                    >
                      Register
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
};

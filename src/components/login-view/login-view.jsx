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
import "./login-view.scss";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      user: username,
      secret: password,
    };

    const url = `https://smclub.herokuapp.com/login?Username=${username}&Password=${password}`;

    const requestOptions = {
      method: "POST",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("login response: ", data);
        if (data.user) {
          console.log("user", data.user);
          console.log("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something is ERRADO!");
      });
  };

  return (
    <Container className="formset">
      <Row>
        <Col>
          <CardGroup>
            <Card bg="dark" text="light">
              <Card.Body>
                <Card.Title> Welcome Back, FDP! </Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="description" controlId="formUsername">
                    <Form.Label className="label">Username:</Form.Label>
                    <Form.Control
                      className="formctrl"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      minLength="3"
                    />
                  </Form.Group>

                  <Form.Group className="description" controlId="formPassword">
                    <Form.Label className="label"> Password: </Form.Label>
                    <Form.Control
                      className="formctrl"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Card.Footer>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-login"
                    >
                      Login
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

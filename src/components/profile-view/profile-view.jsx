import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardGroup, Row, Container } from "react-bootstrap";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite-movies";
import updateUser from "./update-user";

export const ProfileView = ({ movies }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [userData, setUserData] = useState([]);

  const [token, setToken] = useState(storedToken ? storedToken : null);

  const [currentUsername, setusername] = useState(
    storedUser ? storedUser : null
  );
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  function handleResponse(response) {
    return response.json().then((users) => {
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(users));
        setUserData(users);
      } else {
        if ([401, 403].includes(response.status) && auth?.token) {
          localStorage.removeItem("user");
        }

        const error = (users && users.message) || response.statusText;
        return Promise.reject(error);
      }

      return users;
    });
  }

  const getUserData = () => {
    const url = `https://smclub.herokuapp.com/users/${storedUser.Username}`;
    const bearer = `Bearer ${token}`;
    fetch(url, {
      method: "GET",
      headers: { Authorization: bearer },
    }).then(handleResponse);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleUpdate = () => {
    if (!token) return;

    var userCredentials = {
      Username: currentUsername ? currentUsername : userData.Username,
      Password: password ? password : userData.Password,
      Email: email ? email : userData.Email,
      Birthday: birthday ? birthday : userData.Birthday,
    };

    fetch(`https://smclub.herokuapp.com/users/${storedUser.Username}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(userCredentials),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          window.open(`/${storedUser.Username}`, "_self");
        }
      })
      .catch((e) => {
        alert("Something is ERRADO!");
      });
  };

  const handleDelete = () => {
    if (storedUser.Username && token) {
      let confirmDelete = confirm(
        "Are you sure you want to delete your account permanently?"
      );
      if (!confirmDelete) return;

      fetch(`https://smclub.herokuapp.com/users/${storedUser.Username}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Your account was permanently deleted.");
          localStorage.clear();
          window.open("/", "_self");
        })
        .catch((e) => {
          alert("Something is ERRADO!");
        });
    }
  };

  return (
    <Container className="profile-container d-flex justify-content-center align-items-center">
      <Row xs={1}>
        <Row>
          <h2>Your Profile</h2>
        </Row>
        <Col>
          <Card bg="secondary" className="profile-card">
            <Card.Body>
              <Card.Title>Name: {userData.Username}</Card.Title>
              <Card.Text>Email: {userData.Email}</Card.Text>
              <Card.Text>Birthday: {userData.Birth_Date}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <FavoriteMovies
          usersFavMovies={movies.filter((user) =>
            userData.FavoriteMovies.includes(user.id)
          )}
        />
        <Row>
          <h2>Update Info</h2>
        </Row>
        <Col>
          <Card bg="dark">
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentUsername}
                    onChange={(e) => setusername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Birthday:</Form.Label>
                  <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </Form.Group>
                <Button
                  className="mt-2"
                  variant="info"
                  onClick={() => {
                    handleUpdate();
                  }}
                >
                  Update Info
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Row>
          <h2>Delete Account</h2>
        </Row>
        <Col>
          <Card bg="dark">
            <Card.Body>
              <Button
                variant="danger"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete Account
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

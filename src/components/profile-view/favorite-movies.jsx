import React from "react";
import { Button, Row, Col, Figure, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./favorite-movies.scss";

export const FavoriteMovies = ({ usersFavMovies }) => {
  const token = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const removeFav = (movieId) => {
    fetch(
      `https://smclub.herokuapp.com/users/${storedUser.Username}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
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

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <h2> Favorite movies</h2>
          </Col>
        </Row>
        <Row>
          {usersFavMovies.map((movie) => {
            return (
              <Col xs={12} md={6} lg={3} key={movie.id} className="fav-movie">
                <Figure>
                  <Link to={`/movies/${movie.id}`}>
                    <Figure.Image
                      crossOrigin="anonymous"
                      src={movie.image}
                      alt={movie.title}
                    />
                    <Figure.Caption>{movie.title}</Figure.Caption>
                  </Link>
                </Figure>
                <Button variant="secondary" onClick={() => removeFav(movie.id)}>
                  Remove
                </Button>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FavoriteMovies;

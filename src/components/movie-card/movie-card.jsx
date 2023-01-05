import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  return (
    <Container className="content">
      <Col>
        <Card className="h-100; card" bg="dark" text="light">
          <Card.Img variant="top" crossOrigin="anonymous" src={movie.image} />
          <Card.Body>
            <Card.Title className="title"> {movie.title} </Card.Title>
            <Card.Text className="description">
              By {movie.director.name}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
              <Button className="btn-login">Open</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </Container>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    Genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

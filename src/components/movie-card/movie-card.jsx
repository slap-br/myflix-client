import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//ADICIONEI CLASSE  EM MOVIE CARD PARA DAR MARGIN TOP PARA OS FILMES NAO COLIDIREM COM O NAVBAR
import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100; content" bg="dark" text="light">
      <Card.Img variant="top" crossOrigin="anonymous" src={movie.image} />
      <Card.Body>
        <Card.Title className="important"> {movie.title} </Card.Title>
        <Card.Text className="description"> {movie.director.name} </Card.Text>
      </Card.Body>
        <Card.Footer>
          <Link to={`/movies/${encodeURIComponent(movie.id)}`}> 
          <Button className="open-button"> Open </Button>
          </Link>
        </Card.Footer>
    </Card>
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
    })
  }).isRequired
};

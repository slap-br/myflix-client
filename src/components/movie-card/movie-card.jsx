import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";


import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100" bg="dark" text="light">
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title className="important"> {movie.title} </Card.Title>
        <Card.Text className="description"> {movie.director.name} </Card.Text>
      </Card.Body>
      <Button onClick={() => onMovieClick(movie)} className="open-button" style={{ cursor: "pointer"}}>
          Open
        </Button>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string
    }),
    Genre: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

import "./movie-view.scss";
import { Button, Card } from "react-bootstrap";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Card bg="dark" text="light">
      <Card.Header> 
            <div className="important">
              <span>Title: </span>
              <span >{movie.title}</span>
            </div>
      </Card.Header>
      <Card.Body>
        <div className="description">
            <div>
              <img className="w-100" src={movie.image} />
            </div>
            <div>
              <span className="label">Description: </span>
              <span>{movie.description}</span>
            </div>
            <div>
              <span className="label">Release Year: </span>
              <span>{movie.releaseYear}</span>
            </div>
            <div>
              <span className="label">Genre: </span>
              <span>{movie.genre.name}</span>
            </div>
            <div>
              <span className="label">Director: </span>
              <span>{movie.director.name}</span>
            </div>
          </div>
      </Card.Body>

          <Button
            onClick={onBackClick}
            className="back-button"
            style={{ cursor: "pointer" }}
          >
            Back
          </Button>
    </Card>
  );
};

//Criar classes para alinhar os textos
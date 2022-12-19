import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
 const { movieId } = useParams();
 const movie = movies.find((b) => b.id === movieId);
 //id isn't 
//  var title = movie.title;
//  var id = movie.id;
 
 
  return (
    <Card bg="dark" text="light">
      <Card.Header> 
            <div>
              <span className="important"> {movie.title} </span>
            </div>
      </Card.Header>
      <Card.Body>
        <Card.Group> 
            <div className="description">
                <div>
                  <Card.Img className="w-100" crossOrigin="anonymous" src={movie.image} />
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
          </Card.Group>
          </Card.Body>
              <Card.Footer>
                  <Link to="{`/`}">
                      <Button> Back </Button>
                  </Link>
              </Card.Footer>
      </Card>
  );
};

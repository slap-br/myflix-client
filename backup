import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card, CardGroup, Row, Container } from "react-bootstrap";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((b) => b.id === movieId);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const addFavorite = (movieId) => {
    if (!token) return;

    const url = `https://smclub.herokuapp.com/users/${storedUser.Username}/movies/${movieId}`;

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        alert("Something is ERRADO!");
      });
  };

  return (
    <Container>
      <Row>
        <Card bg="dark" text="light">
          <Card.Header>
            <div>
              <span className="important"> {movie.title} </span>
            </div>
            <Button
              className="fav-btn"
              size="sm"
              variant="secondary"
              onClick={addFavorite(movie.id)}
            >
              Add to Favorites
            </Button>
          </Card.Header>
          <Card.Body>
            <div>
              <div>
                <Card.Img
                  className="cardimage"
                  crossOrigin="anonymous"
                  src={movie.image}
                />
              </div>
              <div>
                <span className="labeltitle">Description: </span>
                <span className="description">{movie.description}</span>
              </div>
              <div>
                <span className="labeltitle">Release Year: </span>
                <span className="description">{movie.releaseYear}</span>
              </div>
              <div>
                <span className="labeltitle">Genre: </span>
                <span className="description">{movie.genre.name}</span>
              </div>
              <div>
                <span className="labeltitle">Director: </span>
                <span className="description">{movie.director.name}</span>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link to="/">
              <Button className="btn-login"> Back </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  );
};

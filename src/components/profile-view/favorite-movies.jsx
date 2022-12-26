import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const FavoriteMovies = ({ usersFavMovies }) => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <h2> Favorite movies</h2>
        </Col>
      </Row>
      <Row>
        {usersFavMovies.map((movie) => {
          return (
            <Col xs={12} md={6} lg={3} key={movie.id}>
              <img crossOrigin="anonymous" src={movie.image} />
              <Link to={`/movies/${movie.id}`}>
                <h4> {movie.title} </h4>
              </Link>
              <Button variant="secondary" onClick={() => removeFav(movie.id)}>
                {" "}
                Remove from list{" "}
              </Button>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default FavoriteMovies;

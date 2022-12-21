import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function favoriteMovies(favoriteMoviesList) {


    return (
    <>
        <Row>
            <Col xs={12}>
            <h2> Favorite movies</h2>
            </Col>
        </Row>
        <Row>
            {favoriteMoviesList.map((movies) =>{
                return(
                    <Col xs={12} md={6} lg={3} 
                    key={movies.id}>
                        <img src={movies.image} />
                        <Link to={`/movies/${movies.id}`}>
                            <h4> {movies.title} </h4>
                        </Link>
                        <Button variant="seconday" OnClick={() => removeFav(movie.id)}> Remove from list </Button>
                    </Col>
                )
                })
            }
        </Row>
    </>
    )
}

export default favoriteMovies;
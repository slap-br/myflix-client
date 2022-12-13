import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://smclub.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((item) => {
          return {
            id: item._id,
            description: item.Description,
            image: item.ImagePath,
            title: item.Title,
            releaseYear: item.ReleaseYear,
            genre: {
              name: item.Genre.Name,
              description: item.Genre.Description
            },
            director:{
              name: item.Director.Name,
              bio: item.Director.Bio,
              birth: item.Director.Birth,
              death: item.Director.Death,
            }
          };
        });
        console.log(data);
        setMovies(moviesFromApi);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div> list is empty! oh no! </div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};

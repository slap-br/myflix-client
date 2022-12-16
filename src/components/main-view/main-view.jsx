import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // USE EFFECT PARA CARREGAR APOS LOGAR NA BAGASSA! AQUI ABAIXO TALVEZ?

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
            director: {
              name: item.Director.Name,
              bio: item.Director.Bio,
              birth: item.Director.Birth,
              death: item.Director.Death
            }
          };
        })
        console.log(data);
        setMovies(moviesFromApi);
      }); if (!token) return;
      fetch("..../movies", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((response) => response.json())
        .then((movies) => {
          setMovies(movies);
        });
  }, []);

  if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        or <SignupView />
      </>
    );
  }

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
    /* logout button */
    <div>
      <button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      >
        Logout
      </button>
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

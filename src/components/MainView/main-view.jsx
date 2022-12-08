import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    { id: 1,
      title: "The House Is Black",
      description: 
      "Set in a leper colony in the north of Iran, The House is Black juxtaposes 'ugliness', of which there is much in the world as stated in the opening scenes, with religion and gratitude.",
      genre: "Documentary",
      image: 
      "https://m.media-amazon.com/images/M/MV5BOGIyODcyMDUtZWI0Zi00ZDcwLWJlOTktNTJkNjI1MzVmN2Q4XkEyXkFqcGdeQXVyODU1OTc0MzI@._V1_.jpg",
      director: "Forugh Farrokhzad",
      releaseYear: "1963"
    },
    { id: 2, 
      title: "Meshes Of The Afternoon",
      description: "A woman sees someone on the street as she is walking back to her home. She goes to her room and sleeps on a chair. As soon as she is asleep, she experiences a dream in which she repeatedly tries to chase a mysterious hooded figure with a mirror for a face but cannot catch it. With each failure, she re-enters her house and sees numerous household objects including a key, a bread knife, a flower, a telephone, and a phonograph.",
      genre: "Fantasy",
      image: 
      "https://m.media-amazon.com/images/M/MV5BYzI0ODY4MTgtNjcxZC00Njk5LWI4MjQtZWRhMzU0ZjgwNDlmXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_.jpg",
      director: "Maya Deren",
      releaseYear: "1943"
    },
    { id: 3, 
      title: "Night And Fog",
      description: "One of the most vivid depictions of the horrors of Nazi Concentration Camps. Filmed in 1955 at several concentration camps in Poland, the film combines new color and black and white footage with black and white newsreels, footage shot by the victorious allies, and stills, to tell the story not only of the camp’s, but to portray the horror of man's brutal inhumanity.",
      genre: "Documentary",
      image: 
      "https://m.media-amazon.com/images/M/MV5BZmUzMDBjMTctMWFkNy00YTZlLWJjYjgtMzcwYjFjOGUwMDczXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
     director: "Alain Resnais",
     releaseYear: "1956"
  },
    { id: 4, 
      title: "Scorpio Rising",
      description: "A gang of Nazi bikers prepares for a race as sexual, sadistic, and occult images are cut together.",
      genre: "Music",
      image: 
      "https://image.tmdb.org/t/p/w780/fs9QDvOzOpZCaa2rv1U57jAFfYU.jpg",
     director: "Kenneth Anger",
     releaseYear: "1963",
  },
    { id: 5, 
      title: "Wavelenght",
      description: "Claimed by some to be one of the most unconventional and experimental films ever made, Wavelength is a structural film of a 45-minute long zoom-in on a window over a period of a week. Very unconventional and experimental, indeed.",
      genre: "Drama",
      image: 
      "https://m.media-amazon.com/images/M/MV5BMDFhZTcxMmUtYTYwMS00NGVkLWE1YTEtYWIxN2M4ZTdmN2VmXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
     director: "Michael Snow",
     releaseYear: "1967"
  }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);
    if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick= { () =>
    setSelectedMovie (null) } />;
  }
  if (movies.lenght === 0) {
    return <div> The list is empty! </div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard 
        key={movie.id} 
        movie={movie} 
        onMovieClick={(newSelectedMovie) =>{
          setSelectedMovie(newSelectedMovie);
        }}
        />
      ))}
    </div>
  );
};

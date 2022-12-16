import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
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

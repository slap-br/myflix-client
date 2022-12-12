export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
    <div>
      <span>Title: </span>
      <span>{movie.title}</span>
    </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director}</span>
      </div>
      <div>
        <span>Release Year: </span>
        <span>{movie.ReleaseYear}</span>
      </div>
      <div>
        <img src={movie.image} />
      </div>
      <button onClick={onBackClick}>Back</button>

    </div>
  );
};
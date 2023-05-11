import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <ul>
    {movies.map((movie) => (
        <li key={`${movie.id}`} to="">
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
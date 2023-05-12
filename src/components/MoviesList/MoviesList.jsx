import { Link } from "react-router-dom";
import propTypes from 'prop-types';
import { Li } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <ul>
    {movies.map((movie) => (
        <Li key={`${movie.id}`} to="">
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </Li>
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
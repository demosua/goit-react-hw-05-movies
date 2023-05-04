import { Link } from "react-router-dom";
import { useState } from "react";
import api from '../../api/api';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  
  api.getMovies()
    .then(result => {setMovies(result)})
    .catch(error => {console.log(error.message)})

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
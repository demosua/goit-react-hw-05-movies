import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const MovieDetails = ({ movie }) => {
  const { title, overview, genres, vote_average, release_date, poster_path } = movie;
  const movieYear = `(${release_date.split('-')[0]})`;
  const movieImage = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`;
  const movieGenres = genres.flatMap(genre => genre.name).join(", ");
  const moviePercent = `${(Number(vote_average) * 10).toFixed(0)}%`
  return (

    <div>
      <img src={movieImage} alt={title} width={200}/>
      <div>movie - {title} {movieYear ? movieYear : ""}</div>
      <div>overview - {overview}</div>
      <div>genres - {movieGenres}</div>
      <div>{moviePercent ? `User Score ${moviePercent}` : "0"}</div>
        <ul>
          <li><Link to="cast">cast</Link></li>
          <li><Link to="reviews">reviews</Link></li>
        </ul>
    </div>
 
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movie: propTypes.shape({
      title: propTypes.string.isRequired,
      overview: propTypes.string.isRequired,
      vote_average: propTypes.number.isRequired,
      release_date: propTypes.string.isRequired,
      poster_path: propTypes.string.isRequired,
    }).isRequired,
}
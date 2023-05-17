import propTypes from 'prop-types';
import { Wrapper, Mov } from './MovieInfo.styled';

const MovieDetails = ({ movie }) => {
  const { title, overview, genres, vote_average, release_date, poster_path } = movie;
  const movieYear = `(${release_date.split('-')[0]})`;
  const movieImage = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`;
  const movieGenres = genres.flatMap(genre => genre.name).join(", ");
  const moviePercent = `${(Number(vote_average) * 10).toFixed(0)}%`

  return (
    <>
    <Wrapper>
      <Mov>
        <img src={movieImage} alt={title} width={200}/>
        <ul>
          <li><h2>{title} {movieYear ? movieYear : ""}</h2></li>
          <li><h4>{overview}</h4></li>
          <li><p>{movieGenres}</p></li>
          <li><p>{moviePercent ? `User Score ${moviePercent}` : "0"}</p></li>
        </ul>
      </Mov>
    </Wrapper>
    <p>Additional information</p>
    </>
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
import { Suspense } from 'react';
import { Link, Outlet } from "react-router-dom";
import propTypes from 'prop-types';
import { Wrapper, Ul, Li, Mov } from './MovieInfo.styled';
import Loader from '../../components/Loader';

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
          <Li><h2>{title} {movieYear ? movieYear : ""}</h2></Li>
          <Li><h4>{overview}</h4></Li>
          <Li><p>{movieGenres}</p></Li>
          <Li><p>{moviePercent ? `User Score ${moviePercent}` : "0"}</p></Li>
          <Li></Li>
        </ul>
      </Mov>
    </Wrapper>

    <p>Additional information</p>
        <Ul>
          <Li><Link to="cast">cast</Link></Li>
          <Li><Link to="reviews">reviews</Link></Li>
        </Ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
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
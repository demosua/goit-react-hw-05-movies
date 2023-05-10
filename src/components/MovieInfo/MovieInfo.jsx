import { Link } from "react-router-dom";

const MovieDetails = ({ movie }) => {
  const { title, overview, genres, vote_average, release_date, poster_path } = movie;
  const movieYear = `(${release_date.split('-')[0]})`;
  const movieImage = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`;
  const movieGenres = genres.flatMap(genre => genre.name).join(", ");
  const moviePercent = `${(Number(vote_average) * 10).toFixed(2)}%`
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
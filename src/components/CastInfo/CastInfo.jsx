import { Link } from "react-router-dom";

const CastInfo = ({ credits }) => {
  console.log(credits);
  // const { title, overview, genres, vote_average, release_date, poster_path } = credits;
  // const movieYear = release_date.split('-')[0];
  // const movieImage = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`;
  // const movieGenres = genres.flatMap(genre => genre.name).join(", ");

  return (

    <div>
      {/* <img src={movieImage} alt="the-king" width={200}/>
      <div>movie - {title}</div>
      <div>{movieYear} </div>
      <div>overview - {overview}</div>
      <div>genres - {movieGenres}</div>
      <div>User Score {vote_average * 10}%</div>
        <ul>
          <li><Link to="cast">cast</Link></li>
          <li><Link to="reviews">reviews</Link></li>
        </ul> */}
    </div>
 
  );
};

export default CastInfo;
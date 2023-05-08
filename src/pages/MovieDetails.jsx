import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Loader from '../components/Loader'
import  MovieInfo from '../components/MovieInfo'
import api from '../api/api';
import { Link, Outlet } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchMovieDetails(){
      setStatus('pending');
      try{
        const movie = await api.getMovieDetails(id);
        setMovie(movie);
      }catch{
        setStatus('rejected');
      }finally{
        setStatus('resolved');
      }
    }
    fetchMovieDetails();
  }, [id])

  return (
    <>
      {status === 'rejected' && <div></div>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          <MovieInfo movie={movie} />
          <ul>
            <li><Link to="cast">cast</Link></li>
            <li><Link to="reviews">reviews</Link></li>
          </ul>
          <Outlet />
      </>
      )}
      
    </>
  );
}
export default MovieDetails;
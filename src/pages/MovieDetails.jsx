import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Loader from '../components/Loader'
import  MovieInfo from '../components/MovieInfo'
import api from '../api/api';
import { Link, Outlet } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchMovieDetails(){
      setStatus('pending');
      try{
        const movie = await api.getMovieDetails(movieId);
        setMovie(movie);
      }catch{
        setStatus('rejected');
      }finally{
        setStatus('resolved');
      }
    }
    fetchMovieDetails();
  }, [movieId])

  return (
  
    <>
      {status === 'rejected' && <div></div>}
      {status === 'pending' && <Loader />}
      <>
        {status === 'resolved' && <MovieInfo movie={movie} />}
        {status === 'resolved' && <Outlet/>}
      </>
    </>
  );
}
export default MovieDetails;
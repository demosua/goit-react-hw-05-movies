import { useState, useEffect } from 'react';
import { useParams, Outlet } from "react-router-dom";
import Loader from '../components/Loader'
import  MovieInfo from '../components/MovieInfo'
import api from '../api/api';

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
      {status === 'resolved' && (<><MovieInfo movie={movie} /><Outlet /></>)}
    </>
  );
}
export default MovieDetails;
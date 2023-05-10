import { useState, useEffect } from 'react';
import { useParams, Outlet } from "react-router-dom";
import Loader from '../components/Loader'
import  MovieInfo from '../components/MovieInfo'
import api from '../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        console.log(movie)
      }catch(error){
        setStatus('rejected');
        toast.error(error.message);
      }finally{
        setStatus('resolved');
      }
    }
    fetchMovieDetails();
  }, [movieId])

  return (
    <>
      {status === 'rejected' && <ToastContainer autoClose={1000} />}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (<><MovieInfo movie={movie} /><Outlet /></>)}
    </>
  );
}
export default MovieDetails;
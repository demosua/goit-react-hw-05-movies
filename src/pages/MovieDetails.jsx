import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from "react-router-dom";
import Loader from '../components/Loader'
import  MovieInfo from '../components/MovieInfo'
import api from '../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackLink from "../components/BackLink";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/home";

  useEffect(() => {
    async function fetchMovieDetails(){
      setStatus('pending');
      try{
        const movie = await api.getMovieDetails(movieId);
        setMovie(movie);
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
      {status === 'resolved' && (<><BackLink to={backLinkHref}>Back to movies</BackLink><MovieInfo movie={movie} /><Outlet /></>)}
    </>
  );
}
export default MovieDetails;
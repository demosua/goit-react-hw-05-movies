import {useState, useEffect} from 'react';
import  MoviesList from '../components/MoviesList'
import Loader from '../components/Loader'
import api from '../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchMovies(){
      setStatus('pending');
      try{
        const movies = await api.getTrendingMovies();
        setMovies(movies);
      }catch(error){
        setStatus('rejected');
        toast.error(error.message);
      }finally{
        setStatus('resolved');
      }
    }
    fetchMovies();
  }, [])

  return {movies, status}
}

const Home = () => {
  const { movies, status } = useFetchMovies();

  return (
    <>
    {status === 'rejected' && <ToastContainer autoClose={1000} />}
    {status === 'pending' && <Loader />}
    {status === 'resolved' && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
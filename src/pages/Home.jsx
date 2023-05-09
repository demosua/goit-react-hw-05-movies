import {useState, useEffect} from 'react';
import  MoviesList from '../components/MoviesList'
import Loader from '../components/Loader'
import api from '../api/api';

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchMovies(){
      setStatus('pending');
      try{
        const movies = await api.getTrendingMovies();
        setMovies(movies);
      }catch{
        setStatus('rejected');
      }finally{
        setStatus('resolved');
      }
    }
    fetchMovies();
  }, [])

  return {movies, status}
}



const Home = () => {
  const {movies, status} = useFetchMovies()
  //замість Лоадера вивчити скелетон
  return (
    <>
    {status === 'rejected' && <div></div>}
    {status === 'pending' && <Loader />}
    {status === 'resolved' && <MoviesList movies={movies} />}
    </>
  );

};

export default Home;
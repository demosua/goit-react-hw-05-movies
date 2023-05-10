import {useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import  MoviesList from '../components/MoviesList'
import Loader from '../components/Loader'
import api from '../api/api';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  
  useEffect(() => {
    async function fetchMovieSearch(){
      setStatus('pending');
      try{
        console.log(searchQuery);
        const moviesList = await api.getMoviesSearch(searchQuery);
        setMoviesList(moviesList);
        toast.error("de");
        console.log(moviesList);
      }catch{
        setStatus('rejected');
      }finally{
        setStatus('resolved');
      }
    }
    fetchMovieSearch();
  }, [searchQuery])

  
  const handleSubmit = ({ query }) =>{
    setSearchParams(query && {query: query.toLowerCase().trim()})
  };

  return (
    <div>
      {status === 'rejected' && <ToastContainer autoClose={1000} />}
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" type="text" autoComplete="off" placeholder="Enter movie you'd like to find" autoFocus></Field>
          <button type="submit">
            Submit
        </button>
        </Form>
      </Formik>
      {status === 'resolved' && <MoviesList movies={moviesList}/>}
    </div>
  );
};

export default Movies;
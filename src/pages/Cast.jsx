import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Loader from '../components/Loader'
import  CastInfo from '../components/CastInfo'
import api from '../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchCreditsDetails(){
      setStatus('pending');
      try{
        const credits = await api.getMovieCredits(movieId);
        setCredits(credits);
      } catch(error) {
          setStatus('rejected');
          toast.error(error.message);
      }finally{
        setStatus('resolved');
      }
    }
    fetchCreditsDetails();
  }, [movieId])

  return (
    <>
      {status === 'rejected' && <ToastContainer autoClose={1000} />}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <CastInfo credits={credits} />}
    </>
  );
}
export default Cast;
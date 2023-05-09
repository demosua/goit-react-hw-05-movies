import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Loader from '../components/Loader'
import  CastInfo from '../components/CastInfo'
import api from '../api/api';

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
      }catch{
        setStatus('rejected');
      }finally{
        setStatus('resolved');
      }
    }
    fetchCreditsDetails();
  }, [movieId])

  return (
    <>
      {status === 'rejected' && <div></div>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <CastInfo credits={credits} />}
    </>
  );
}
export default Cast;
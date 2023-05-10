import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Loader from '../components/Loader'
import  ReviewsInfo from '../components/ReviewsInfo'
import api from '../api/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchReviewsDetails(){
      setStatus('pending');
      try{
        const reviews = await api.getMovieReviews(movieId);
        setReviews(reviews);
      }catch{
        setStatus('rejected');
      }finally{
        setStatus('resolved');
      }
    }
    fetchReviewsDetails();
  }, [movieId])

  return (
    <>
      {status === 'rejected' && <div></div>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <ReviewsInfo reviews={reviews} />}
    </>
  );
}
export default Reviews;
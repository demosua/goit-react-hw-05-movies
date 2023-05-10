import {} from './ReviewsInfo.styled';

const ReviewsInfo = ({ reviews }) => {
  return (
    <div>
      {reviews.length > 0
        ? (
          <ul>
            {reviews.map(review => 
              <li key ={review.id}>
                <p>Author: {review.author_details.username}</p>
                {review.content}
              </li>
            )}
          </ul>
          )
        : <p>We don't have any reviews for this movie yet.</p>}
    </div>
  );
};

export default ReviewsInfo;
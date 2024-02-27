import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/moviesAPI';

import { Item, List } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();
    
  useEffect(() => {
    const getFetchReviews = async () => {
      try {
        const reviews = await getMovieReviews(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        console.log(error.message);
      }
    };
    getFetchReviews();
  }, [movieId]);
    
  return movieReviews?.length >= 1 ? (
    <List>
      {movieReviews.map(({ author, id, content }) => (
        <Item key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <p>
            <span>Review:</span> {content.slice(0, 500)}...
          </p>
        </Item>
      ))}
    </List>
  ) : (
    <h3>No reviews</h3>
  );
};
export default Reviews;

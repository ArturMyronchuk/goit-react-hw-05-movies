import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const Reviews = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDVkNWI0NDRjNmE4OGRjMzhjNzFjNDk4NjkwOGJmOCIsInN1YiI6IjY0ZDRhMTUwZDEwMGI2MDBjNWNmYTc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oN_XdkYxFImA0SoU4WlFVfk3cEJmjoUrVEqps9KaPM0',
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
          options
        );
        const data = await response.json();
        setReviews(data);
        // console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    Reviews();
  }, [movieId]);

  return (
    <section>
      {reviews.results && reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map(review => (
            <li key={review.created_at}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </section>
  );
};

export default Reviews;

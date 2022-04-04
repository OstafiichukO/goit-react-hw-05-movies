// информация об обзорах
// Рендерится на странице < MovieDetailsPage >
import { useState, useEffect } from "react";
import Api from "../../services";
import { NoReviews, Text } from "./Reviews.styled";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Api.fetchMovieReviews(movieId).then((movie) => setReviews(movie.results));
  }, [movieId]);
  // console.log(reviews);
  // console.log(movieId);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <Text>{review.author}</Text>
              <Text>{review.content}</Text>
            </li>
          ))}
        </ul>
      ) : (
        <NoReviews>We don't have any reviews for this movie.</NoReviews>
      )}
    </>
  );
};

export default Reviews;

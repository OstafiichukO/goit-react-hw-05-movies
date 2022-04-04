// информация об обзорах
// Рендерится на странице < MovieDetailsPage >
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../services";
import { NoReviews, Text } from "./Reviews.styled";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const currentMovieId = useParams();
  const movieId = currentMovieId.movieId;

  useEffect(() => {
    Api.fetchMovieReviews(movieId).then((movie) => setReviews(movie.results));
  }, [movieId]);

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

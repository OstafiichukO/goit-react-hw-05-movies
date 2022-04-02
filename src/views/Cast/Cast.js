// информация о актерском составе.
// Рендерится на странице < MovieDetailsPage >
import { useState, useEffect } from "react";
import Api from "../../services";
import { IMAGE_URL } from "../../services/Api";
import { Ul, Li } from "./Cast.styled";

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    Api.fetchMovieCredits(movieId).then(({ movie }) => {
      setCast(movie);
    });
  }, [movieId]);
  console.log(cast);
  return (
    <>
      <p>Cast</p>
      <Ul>
        {cast.map((el) => (
          <Li key={el.id}>
            <img
              src={IMAGE_URL + el.profile_path}
              alt={el.name}
              width="100"
              height="150"
            />
            <p>{el.name}</p>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Cast;

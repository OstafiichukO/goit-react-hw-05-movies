// информация о актерском составе.
// Рендерится на странице < MovieDetailsPage >
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../services";
import { IMAGE_URL } from "../../services/Api";
import { Ul, Li, Name } from "./Cast.styled";
import defaultImg from "../../img/no_image_available.svg";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const currentMovieId = useParams();
  const movieId = currentMovieId.movieId;

  useEffect(() => {
    Api.fetchMovieCredits(movieId).then((movie) => setCast(movie.cast));
  }, [movieId]);
  return (
    <>
      <Ul>
        {cast.map((el) => (
          <Li key={el.id}>
            {el.profile_path ? (
              <img
                src={IMAGE_URL + el.profile_path}
                alt={el.name}
                width="150"
                height="225"
              />
            ) : (
              <img src={defaultImg} alt={el.name} width="150" height="225" />
            )}
            <Name>{el.name}</Name>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Cast;

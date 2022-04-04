import { NavLink } from "react-router-dom";
import s from "./MovieCard.module.css";
import { IMAGE_URL } from "../../services/Api";

const MovieCard = ({ movies }) => {
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <NavLink to={`/movies/${movie.id}`} className={s.link}>
            {movie.title || movie.name}
            <img
              className={s.image}
              src={IMAGE_URL + movie.poster_path}
              alt={movie.title || movie.name}
              width="300"
              height="450"
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieCard;

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import s from "./MovieCard.module.css";
import { IMAGE_URL } from "../../services/Api";
import defaultImg from "../../img/no_image_available.svg";

const MovieCard = ({ movies }) => {
  return (
    <div className={s.div}>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.item}>
            <NavLink to={`/movies/${movie.id}`} className={s.link}>
              {movie.title || movie.name}
              {movie.poster_path ? (
                <img
                  className={s.image}
                  src={IMAGE_URL + movie.poster_path}
                  alt={movie.title || movie.name}
                  width="300"
                  height="450"
                />
              ) : (
                <img
                  className={s.image}
                  src={defaultImg}
                  alt={movie.title || movie.name}
                  width="300"
                  height="450"
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieCard;

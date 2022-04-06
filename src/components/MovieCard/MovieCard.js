import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import s from "./MovieCard.module.css";
import { IMAGE_URL } from "../../services/Api";
import defaultImg from "../../img/no_image_available.svg";

const MovieCard = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={s.div}>
      <ul className={s.list}>
        {movies.map(({ id, title, name, poster_path }) => (
          <li key={id} className={s.item}>
            <NavLink
              to={`/movies/${id}`}
              state={{ from: location }}
              className={s.link}
            >
              {title || name}
              {poster_path ? (
                <img
                  className={s.image}
                  src={IMAGE_URL + poster_path}
                  alt={title || name}
                  width="300"
                  height="450"
                />
              ) : (
                <img
                  className={s.image}
                  src={defaultImg}
                  alt={title || name}
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

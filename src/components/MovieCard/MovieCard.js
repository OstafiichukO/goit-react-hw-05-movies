import { NavLink, useLocation, Outlet } from "react-router-dom";
import s from "./MovieCard.module.css";
// import { IMAGE_URL } from "../../services/Api";

const MovieCard = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <NavLink
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
            // to={`/movies/${movie.id}`}
            className={s.link}
          >
            {movie.title || movie.name}
            {/* <img
              className={s.image}
              src={IMAGE_URL + movie.poster_path}
              alt={movie.title || movie.name}
              width="300"
              height="450"
            /> */}
          </NavLink>
        </li>
      ))}
    </ul>
    // <div>
    //   <nav className={s.list}>
    //     {movies.map((movie) => (
    //       <Link
    //         // style={{ display: "block", margin: "1rem 0" }}
    //         // to={`/movies/${movie.id}`}
    //         to=":movieId"
    //         key={movie.id}
    //         className={s.item}
    //       >
    //         {/* {movie.title} */}
    //       </Link>
    //     ))}
    //   </nav>
    //   <Outlet />
    // </div>
  );
};

export default MovieCard;

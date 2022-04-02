import { useState, useEffect } from "react";
import Api from "../../services/";
import PageHeading from "../../components/PageHeading";
import MovieCard from "../../components/MovieCard";

// домашняя страница со списком популярных кинофильмов
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    Api.fetchTrendingMovies().then((data) => setMovies(data.results));
  }, []);
  // console.log(movies);
  return (
    <>
      <PageHeading text="Trending today" />
      <MovieCard movies={movies} />
    </>
  );
};

export default HomePage;

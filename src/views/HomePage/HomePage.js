import { useState, useEffect } from "react";
import Api from "../../services/";
import PageHeading from "../../components/PageHeading";
import MovieCard from "../../components/MovieCard";
import { Button, Wrapper } from "./HomePage.styled";
import { addBackToTop } from "vanilla-back-to-top";
import Loader from "../../components/Loading";

// домашняя страница со списком популярных кинофильмов
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setСurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Api.fetchTrendingMovies(currentPage)
      .then((data) => {
        const results = data.results;
        setMovies((prevMovie) => [...prevMovie, ...results]);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [currentPage]);

  useEffect(() => {
    addBackToTop({
      diameter: 50,
      backgroundColor: "rgb(14, 21, 56)",
      textColor: "#aaaaaa",
      innerHTML:
        '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
      scrollDuration: 1000,
    });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setСurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <PageHeading text="Trending today" />
      {movies.length > 0 && <MovieCard movies={movies} />}
      {error && <h2>Something goes wrong: {error.message}</h2>}
      {loading && <Loader />}
      {!loading && movies.length > 0 && !error && (
        <Wrapper>
          <Button onClick={onLoadMore}>Load more</Button>
        </Wrapper>
      )}
    </>
  );
};

export default HomePage;

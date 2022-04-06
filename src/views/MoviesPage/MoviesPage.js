// страница поиска фильмов по ключевому слову
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";
import Loader from "../../components/Loading";
import { Button, Wrapper } from "./MoviesPage.styled";
import api from "../../services/Api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setСurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigate();
  const location = useLocation();

  const onClick = (request) => {
    if (query === request) {
      return;
    }
    setQuery(request);
    navigation({ ...location, search: `?query=${request}` });
    setError(null);
    setMovies([]);
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    const fetch = () => {
      api
        .fetchSearchMovies(query, currentPage)
        .then((request) => {
          if (!request.results.length) {
            toast.error("Try again");
            return;
          }
          const results = request.results;
          setMovies((prevMovie) => [...prevMovie, ...results]);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };
    fetch();
  }, [currentPage, query]);

  useEffect(() => {
    if (location.search === "") {
      return;
    }
    const newRequest = new URLSearchParams(location.search).get("query");
    setQuery(newRequest);
  }, [location.search, location.pathname]);

  const onLoadMore = () => {
    setLoading(true);
    setСurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <SearchBar onClick={onClick} />
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

export default MoviesPage;

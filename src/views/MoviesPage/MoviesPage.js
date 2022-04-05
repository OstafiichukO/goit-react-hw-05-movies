// страница поиска фильмов по ключевому слову
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";
import Api from "../../services/Api";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }

    Api.fetchSearchMovies(query).then((request) => {
      if (!request.results.length) {
        toast.error("Try again");
        return;
      }
      setMovies(request.results);
    });
  }, [query]);

  const onClick = (request) => {
    setQuery(request);
  };

  return (
    <>
      <SearchBar onClick={onClick} />
      {movies && <MovieCard movies={movies} />}
    </>
  );
};

export default MoviesPage;

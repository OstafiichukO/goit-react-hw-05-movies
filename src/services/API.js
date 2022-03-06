import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const KEY = "4f78e0fa15d03d6a74908fc8e459b884";

const fetchTrendingMovies = () => {
  return axios
    .get(`${URL}/trending/all/week?api_key=${KEY}`)
    .then((response) => response.data.resuts);
};

const fetchSearchMovies = (searchQuery) => {
  return axios
    .get(
      `${URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    )
    .then((response) => response.data.results);
};

const fetchMovie = (id) => {
  return axios
    .get(
      `${URL}/movie/${id}?api_key=${KEY}&append_to_response=images&language=en-US`
    )
    .then((response) => response.data);
};

const fetchCast = (id) => {
  return axios
    .get(`${URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`)
    .then((response) => response.data);
};

const fetchReviews = (id) => {
  return axios
    .get(`${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US`)
    .then((response) => response.data);
};

const Api = {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovie,
  fetchCast,
  fetchReviews,
};

export default Api;

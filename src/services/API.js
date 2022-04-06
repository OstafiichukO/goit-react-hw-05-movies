const URL = "https://api.themoviedb.org/3";
const KEY = "4f78e0fa15d03d6a74908fc8e459b884";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

function fetchSearchMovies(name, currentPage) {
  return fetchWithErrorHandling(
    `${URL}/search/movie?api_key=${KEY}&query=${name}&language=en-US&page=${currentPage}&include_adult=false`
  );
}
// `${BASE_URL}/search/movie?${API_KEY}&language=en-US&query=${value}&page=${currentPage}&include_adult=false`;
function fetchTrendingMovies(currentPage) {
  return fetchWithErrorHandling(
    `${URL}/trending/movie/day?api_key=${KEY}&page=${currentPage}`
  );
}

function fetchMovieDetails(id) {
  return fetchWithErrorHandling(
    `${URL}/movie/${id}?api_key=${KEY}&language=en-US`
  );
}

function fetchMovieCredits(id) {
  return fetchWithErrorHandling(
    `${URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
}

function fetchMovieReviews(id) {
  return fetchWithErrorHandling(
    `${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}

const Api = {
  fetchSearchMovies,
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default Api;

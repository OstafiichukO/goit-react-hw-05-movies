const URL = "https://api.themoviedb.org/3";
const KEY = "4f78e0fa15d03d6a74908fc8e459b884";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

// searchQuery
export function fetchSearchMovies(name) {
  return fetchWithErrorHandling(
    `${URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(`${URL}/trending/movie/day?api_key=${KEY}`);
}

export function fetchMovieDetails(id) {
  return fetchWithErrorHandling(
    `${URL}/movie/${id}?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieCredits(id) {
  return fetchWithErrorHandling(
    `${URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieReviews(id) {
  return fetchWithErrorHandling(
    `${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}
import { StyledApp } from "./App.styled";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

function App() {
  return (
    <StyledApp>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
      </Routes>
    </StyledApp>
  );
}

export default App;

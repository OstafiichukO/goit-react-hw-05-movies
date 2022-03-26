import { StyledApp } from "./App.styled";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";

function App() {
  return (
    <StyledApp>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
      </Routes>
    </StyledApp>
  );
}

export default App;

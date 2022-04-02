import { StyledApp } from "./App.styled";
import Navigation from "./components/Navigation";
import { Routes, Route, Outlet, useRoutes } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

function App() {
  // let element = useRoutes([
  //   { path: "/", element: <HomePage /> },
  //   {
  //     path: "movies",
  //     element: <MoviesPage />,
  //     children: [{ path: ":movieId", element: <MovieDetailsPage /> }],
  //   },
  // ]);

  return (
    <StyledApp>
      <Navigation />
      {/* {element}; */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
      </Routes>
    </StyledApp>
  );
}

export default App;

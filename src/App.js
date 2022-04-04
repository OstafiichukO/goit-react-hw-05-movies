import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { StyledApp } from "./App.styled";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";
const HomePage = lazy(() => import("./views/HomePage"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));
const Cast = lazy(() => import("./views/Cast"));
const Reviews = lazy(() => import("./views/Reviews"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));

function App() {
  return (
    <StyledApp>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<Loading />}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="movies/:movieId/*"
          element={
            <Suspense fallback={<Loading />}>
              <MovieDetailsPage />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loading />}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<Loading />}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1500,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </StyledApp>
  );
}

export default App;

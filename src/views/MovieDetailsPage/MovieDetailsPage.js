// страница с детальной информацией о кинофильме
import { useState, useEffect, lazy, Suspense } from "react";
import {
  Route,
  Routes,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { VscArrowLeft } from "react-icons/vsc";
import PageHeading from "../../components/PageHeading";
import {
  Button,
  Container,
  Img,
  Info,
  Name,
  Title,
  Text,
  ContainerAdditional,
  Nav,
} from "./MovieDetailsPage.styled";
import s from "./MovieDetailsPage.module.css";
import { IMAGE_URL } from "../../services/Api";

import Api from "../../services";
import Cast from "../Cast";
import Reviews from "../Reviews";
// import Loading from "../../components/Loading";

const Test = () => {
  return <p>Test Cast</p>;
};

const MovieDetailsPage = () => {
  let navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const { movieId } = useParams();
  // console.log(movieId);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    Api.fetchMovieDetails(movieId).then((movie) => {
      setMovie(movie);
    });
  }, [movieId]);
  console.log(movie);

  const onHomePage = () => {
    navigate("/");
  };

  return (
    <>
      {movie && (
        <>
          <PageHeading
            text={
              <button type="button" onClick={onHomePage}>
                <Button>
                  <VscArrowLeft />
                  Go back
                </Button>
              </button>
            }
          />
          <Container>
            <Img
              src={IMAGE_URL + movie.poster_path}
              alt={movie.title || movie.name}
              width="300"
              height="450"
            />
            <Info>
              <Name>
                {movie.title || movie.name} ({movie.release_date})
              </Name>
              <Text>User score {movie.vote_average} / 10</Text>
              <Title>Overview</Title>
              <Text>{movie.overview}</Text>
              <Title>Genges</Title>
              <Text>{movie.genres.map((genre) => genre.name).join(" | ")}</Text>
            </Info>
          </Container>
          <ContainerAdditional>
            <Text>Additional information</Text>
            <Nav>
              <Link to="cast" className={s.link}>
                Cast
              </Link>
              <Link to="reviews" className={s.link}>
                Reviews
              </Link>
            </Nav>

            <Suspense>
              <Routes>
                <Route path="/cast" element={<Cast />} />
                <Route path="/reviews" element={<Reviews />} />
              </Routes>
            </Suspense>
          </ContainerAdditional>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;

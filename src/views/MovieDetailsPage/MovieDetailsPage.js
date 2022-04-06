// страница с детальной информацией о кинофильме
import { useState, useEffect } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
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
  BtnHome,
  PageHeading,
} from "./MovieDetailsPage.styled";
import s from "./MovieDetailsPage.module.css";
import { IMAGE_URL } from "../../services/Api";
import Api from "../../services";

const MovieDetailsPage = () => {
  // let navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    Api.fetchMovieDetails(movieId).then((movie) => {
      setMovie(movie);
    });
  }, [movieId]);

  const onHomePage = () => {
    // navigate("/");
    // eslint-disable-next-line no-restricted-globals
    history.back();
  };

  return (
    <>
      {movie && (
        <>
          <PageHeading>
            <BtnHome type="button" onClick={onHomePage}>
              <Button>
                <VscArrowLeft />
                Go back
              </Button>
            </BtnHome>
          </PageHeading>
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
          </ContainerAdditional>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;

import { Div, Input, Button } from "./MoviesPage.styled";

// страница поиска фильмов по ключевому слову
const MoviesPage = () => {
  return (
    <Div>
      <Input type="text" />
      <Button>Search</Button>
    </Div>
  );
};

export default MoviesPage;

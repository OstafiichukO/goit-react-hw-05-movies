import { StyledApp } from "./App.styled";
import Api from "./services";

function App() {
  return (
    <StyledApp>
      <div>Hello</div>
      <input
        type="Text"
        plaeholder="type here"
        onSubmit={Api.fetchSearchMovies}
      ></input>
    </StyledApp>
  );
}

export default App;

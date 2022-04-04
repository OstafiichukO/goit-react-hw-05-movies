import { useState } from "react";
import { toast } from "react-toastify";
import { Div, Input, Button } from "./SearchBar.styled";

const SearchBar = ({ onClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      toast.error("No results");
      return;
    }
    onClick(searchQuery);
  };

  return (
    <>
      <Div>
        <form onSubmit={handleClick}>
          <Input
            type="text"
            autoComplete="off"
            value={searchQuery}
            onChange={handleInput}
          />
          <Button type="submit">Search</Button>
        </form>
      </Div>
    </>
  );
};
export default SearchBar;

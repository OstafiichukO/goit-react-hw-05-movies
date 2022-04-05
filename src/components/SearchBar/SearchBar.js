import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { Div, Input, Button } from "./SearchBar.styled";

const SearchBar = ({ onClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInput = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      toast.error("Enter the value of the request!");
      return;
    }
    onClick(searchQuery);
    setSearchQuery("");
  };

  return (
    <>
      <Div>
        <form onSubmit={handleClick}>
          <Input
            name="searchQuery"
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

SearchBar.propTypes = { onClick: PropTypes.func.isRequired };

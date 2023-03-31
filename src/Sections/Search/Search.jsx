import "./Search.scss";
import { useState } from "react";
import { useGlobalContext } from "../../context";

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="type your favorite meal"
          onChange={handleChange}
          value={text}
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button
          className="btn btn-hipster"
          type="button"
          onClick={handleRandomMeal}
        >
          Surprise Me!
        </button>
      </form>
    </header>
  );
};

export default Search;

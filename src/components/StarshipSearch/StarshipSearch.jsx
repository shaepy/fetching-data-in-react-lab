import { useState } from "react";

const StarshipSearch = ({ search, starships, resetSearch }) => {
  const [formData, setFormData] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // calls search function from app
    search(formData);
    setPrevSearchTerm(formData);
    setFormData("");
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const showAllStarships = () => {
    setPrevSearchTerm("");
    resetSearch();
  };

  return (
    <>
      <p>{starships.length} results shown.</p>
      {prevSearchTerm ? <p>{prevSearchTerm}</p> : <p>Search for a starship by name.</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          name="search"
          value={formData}
          onChange={handleChange}
          required
        />
        <button type="submit">search</button>
      </form>
      {prevSearchTerm && (
        <button className="show-all" onClick={showAllStarships}>
          Show all starships
        </button>
      )}
    </>
  );
};

export default StarshipSearch;

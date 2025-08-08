import getStarshipData from "./services/starshipService.js";
import { useState, useEffect } from "react";
import StarshipList from "./components/StarshipList/StarshipList.jsx";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch.jsx";
import "./App.css";

const App = () => {
  const [starshipData, setStarshipData] = useState(null);
  const [displayStarships, setDisplayStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getStarshipData();
        setStarshipData(result.data);
        setDisplayStarships(result.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching starship data:", err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const search = (formData) => {
    const filteredShips = starshipData.filter((ship) =>
      ship.name.toLowerCase().includes(formData.toLowerCase())
    );
    setDisplayStarships(filteredShips);
  };

  const resetSearch = () => {
    console.log("Resetting the search results to show all starships");
    setDisplayStarships(starshipData);
  };

  if (loading) return <h1>Loading starships...</h1>;

  return (
    <div>
      <h1>Star Wars Starships</h1>
      {error && <p>Error: {error}</p>}
      <StarshipSearch search={search} starships={displayStarships} resetSearch={resetSearch} />
      {starshipData && <StarshipList starships={displayStarships} />}
    </div>
  );
};

export default App;

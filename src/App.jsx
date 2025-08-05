import getStarshipData from "./services/starshipService.js";
import { useState, useEffect } from "react";
import StarshipList from "./components/StarshipList/StarshipList.jsx";
import "./App.css";

const App = () => {
  const [starshipData, setStarshipData] = useState(null);
  // this will change what user sees based on search:
  const [displayStarships, setDisplayStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getStarshipData();
        // axios returns data in the .data property
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

  console.log("starshipData is:", starshipData);

  if (loading) return <h1>Loading starships...</h1>;

  return (
    <div>
      <h1>Star Wars Starships</h1>
      {error && <p>Error: {error}</p>}
      {starshipData && <StarshipList starships={displayStarships} />}
    </div>
  );
};

export default App;

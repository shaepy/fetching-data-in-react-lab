import axios from "axios";

const getStarshipData = async () => {
  try {
    return await axios.get("https://swapi.info/api/starships");
  } catch (err) {
    throw new Error("Failed to fetch starships");
  }
};

export default getStarshipData;

const StarshipCard = ({ name, starshipClass, manufacturer, model }) => {
  return (
    <li>
      <h2>{name}</h2>
      <div>
        <p>Class: {starshipClass}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Model: {model}</p>
      </div>
    </li>
  );
};

export default StarshipCard;

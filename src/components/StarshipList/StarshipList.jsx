import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ starships }) => {
  return (
    <section>
      <ul>
        {starships.map((starship, idx) => (
          <StarshipCard
            key={idx}
            name={starship.name}
            starshipClass={starship.starship_class}
            manufacturer={starship.manufacturer}
            model={starship.model}
          />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;

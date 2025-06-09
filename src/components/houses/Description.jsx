import { houses } from "../houses/housesData";

const Description = ({ houseId }) => {
  const house = houses.find((h) => h.id === houseId);

  if (!house) {
    return <div>No description available.</div>;
  }

  return (
    <div>
      <p>{house.description}</p>
      {house.additionalDescription && (
        <p className="mt-3">{house.additionalDescription}</p>
      )}
    </div>
  );
};

export default Description;

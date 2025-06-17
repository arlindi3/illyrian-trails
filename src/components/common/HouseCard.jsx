// /houses/HouseCard.jsx
const HouseCard = ({ house }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
      <img
        src={house.images[0]}
        alt={house.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{house.title}</h2>
        <p className="text-sm text-gray-500">{house.location}</p>
        <p className="text-primary font-bold mt-2">{house.price}</p>
      </div>
    </div>
  );
};

export default HouseCard;

import React from "react";

const ItemCard = ({ image, title, description, price, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg border border-gray-300 p-4 shadow hover:shadow-lg transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
      <p className="mt-2 font-bold text-primary">${price}</p>
    </div>
  );
};

export default ItemCard;

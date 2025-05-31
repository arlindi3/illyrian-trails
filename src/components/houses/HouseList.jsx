import React from "react";
import { houses } from "../houses/housesData";
import HouseCard from "./HouseCard";

const HouseList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
};

export default HouseList;

// import React from "react";
// import Banner from "../components/common/Banner";
// import NavFilters from "../components/common/NavFilters";
// // import { BestWay, Deals, FAQs } from "../components/flights";
// import House from "../banners/house.jpg";
// import HouseList from "../components/houses/HouseList";

// const Houses = () => {
//   return (
//     <div>
//       <Banner banner={House} title="Find your perfect stay" />
//       <NavFilters url="/house/search" />
//       <div className="mt-5 px-[3%] md:px-[6%]">
//         <HouseList />
//         {/* <BestWay /> */}
//         {/* <Deals />
//         <FAQs /> */}
//       </div>
//     </div>
//   );
// };

// export default Houses;

// /houses/Houses.jsx
import { Link } from "react-router-dom";
import { houses } from "../components/houses/housesData";
import HouseCard from "../components/houses/HouseCard";
import Banner from "../components/common/Banner";
import House from "../banners/house.jpg";

const Houses = () => {
  return (
    <>
      <Banner banner={House} title="Find your best House" />
      <div className="pt-16 px-6">
        <h1 className="text-3xl font-bold mb-6">Available Houses</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {houses.map((house) => (
            <Link key={house.id} to={`/houses/${house.id}`}>
              <HouseCard house={house} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Houses;

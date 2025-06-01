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
import House from "../banners/house1.jpg";
import { Explore } from "../components/home";

const Houses = () => {
  return (
    <>
      <Banner banner={House} title="Find Your Perfect Stay" />
      <div className="pt-20 px-4 md:px-12 bg-gradient-to-b from-blue-50 via-white to-white min-h-screen dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-900 dark:text-white drop-shadow-lg tracking-tight">
          Available Houses
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house) => (
            <Link
              key={house.id}
              to={`/houses/${house.id}`}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <HouseCard house={house} />
            </Link>
          ))}
        </div>
        <div className="mt-16 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-3 text-blue-800 dark:text-white">
            Recommended Packages
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-300 max-w-2xl text-center">
            Explore our exclusive packages for a complete and comfortable stay.
            Choose from curated deals that include amenities, local experiences,
            and more to make your trip memorable.
          </p>
          <div className="w-full">
            <Explore />
          </div>
        </div>
      </div>
    </>
  );
};

export default Houses;

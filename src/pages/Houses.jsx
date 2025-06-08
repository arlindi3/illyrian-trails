// /houses/Houses.jsx
import { Link } from "react-router-dom";
import { houses } from "../components/houses/housesData";
import HouseCard from "../components/houses/HouseCard";
// import Banner from "../components/common/Banner";
import House from "../banners/house1.jpg";
import { Explore } from "../components/home";

const Houses = () => {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <div className="relative h-48 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden mb-6 md:mb-8">
        <img
          src={House}
          alt="Find Your Perfect Stay"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeIn"
          style={{ animation: "fadeIn 1.5s forwards" }}
        />
        <div
          className="pointer-events-none absolute left-0 right-0 bottom-0 h-16 sm:h-20 md:h-32"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--tw-gradient-to, #f3f4f6) 100%)",
          }}
        />
        <div className="relative z-10 bg-white/80 dark:bg-gray-900/80 rounded-xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg text-center w-[95%] max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-blue-900 dark:text-white drop-shadow-lg tracking-tight">
            Find Your Perfect Stay
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-200 text-base sm:text-lg">
            Book your dream house in just a few clicks
          </p>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
      {/* Houses List */}
      <div className="px-2 sm:px-4 md:px-12 max-w-6xl mx-auto w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-blue-800 dark:text-white text-center">
          Available Houses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {houses.map((house) => (
            <Link key={house.id} to={`/houses/${house.id}`} className="group">
              <HouseCard house={house} />
              <button className="mt-2 sm:mt-3 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow group-hover:bg-blue-700 transition">
                More Details
              </button>
            </Link>
          ))}
        </div>
        {/* Recommended Packages */}
        <div className="mt-12 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow p-6 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2 text-blue-800 dark:text-white">
            Recommended Packages
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300 text-center">
            Discover curated deals with amenities and local experiences for a
            memorable trip.
          </p>
        </div>
        {/* Explore Section */}
        <div className="w-full mt-10">
          <Explore />
        </div>
      </div>
    </div>
  );
};

export default Houses;

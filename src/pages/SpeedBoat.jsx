import React from "react";
import Banner from "../components/common/Banner";
import SpeedBoad from "../banners/speedboat.jpg";
import { FaStar } from "react-icons/fa";
import { speedBoatTours } from "../data/dummyData";
import { Explore } from "../components/home";
const SpeedBoat = () => {
  return (
    <div>
      <Banner banner={SpeedBoad} title="Your best and comfortable boat ride" />
      <div className="min-h-screen pt-24 px-6 md:px-12 pb-16 bg-white dark:bg-card-dark">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Speed Boat Tours
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {speedBoatTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white dark:bg-dark-light rounded-xl shadow-md border hover:shadow-lg transition duration-300"
            >
              <img
                src={tour.image}
                alt={tour.name}
                className="h-56 w-full object-cover rounded-t-xl"
              />
              <div className="p-5 space-y-2">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-white">
                  {tour.name}
                </h2>
                <p className="text-gray-500 dark:text-gray-300">
                  {tour.description}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Duration: <strong>{tour.duration}</strong>
                </p>
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    {tour.rating} ({tour.number_of_reviews} reviews)
                  </span>
                  <span className="font-semibold text-primary">
                    €{tour.price}
                  </span>
                </div>
                <button className="mt-4 w-full bg-primary text-white py-2 rounded-full hover:bg-primary/90 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 bg-white/80 dark:bg-card-dark/80 rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-3 text-blue-800 dark:text-blue-200">
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
  );
};

export default SpeedBoat;

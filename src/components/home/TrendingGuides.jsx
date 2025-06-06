import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { tourPackages } from "../../data/dummyData";

const TrendingGuides = () => {
  return (
    <div className="pt-12 pb-20">
      <div className="text-center mb-8">
        <h1 className="heading text-gray-800 dark:text-white capitalize tracking-wide">
          Trending Guides
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
          The most searched for cities on Ilyrian Trails
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tourPackages.map(
          ({ id, name, rating, image, number_of_reviews, price }) => (
            <div
              key={id}
              className="bg-white dark:bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute top-3 right-3 bg-white/80 dark:bg-gray-900/70 px-3 py-1 rounded-full flex items-center gap-1 shadow text-sm font-medium">
                  <FaStar className="text-secondaryYellow" />
                  <span className="text-gray-800 dark:text-gray-100">
                    {rating}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {name}
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-500 dark:text-gray-300 text-sm">
                    {number_of_reviews} reviews
                  </span>
                </div>
                <div className="flex items-end justify-between flex-1">
                  <div>
                    <span className="text-2xl font-extrabold text-primary dark:text-secondary">
                      €{price}
                    </span>
                    <span className="text-sm opacity-80 dark:text-gray-300 ml-1">
                      /Day
                    </span>
                  </div>
                  <Link
                    to={`/packet/${id}/confirm-booking`}
                    className="btn btn-secondary px-5 py-2 rounded-full shadow hover:scale-105 transition-transform duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TrendingGuides;

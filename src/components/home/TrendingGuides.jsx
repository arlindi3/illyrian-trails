import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { tourPackages } from "../../data/dummyData";

const TrendingGuides = () => {
  return (
    <div className="pt-14 pb-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-card-dark dark:to-gray-900">
      <div className="text-center mb-10">
        <h1 className="heading text-gray-900 dark:text-white capitalize tracking-wide text-4xl font-extrabold">
          Popular Guides
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
          Discover the most popular destinations and guides on Ilyrian Trails.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tourPackages
          .slice(0, 9)
          .map(
            ({ id, name, type, rating, image, number_of_reviews, price }) => (
              <div
                key={id}
                className="bg-white dark:bg-card-dark rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col border border-gray-100 dark:border-gray-800 hover:-translate-y-1 hover:scale-[1.02] transform transition-all"
              >
                <div className="relative group">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-80 object-cover rounded-t-3xl group-hover:brightness-90 transition"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/80 px-4 py-1.5 rounded-full flex items-center gap-1 shadow text-base font-semibold">
                    <FaStar className="text-secondaryYellow" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {rating}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 bg-white dark:bg-card-dark rounded-b-3xl">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {name}
                  </h2>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 dark:text-gray-300 text-xs">
                      {number_of_reviews} reviews
                    </span>
                  </div>
                  <div className="flex items-end justify-between flex-1">
                    <div>
                      <span className="text-xl font-extrabold text-primary dark:text-secondary">
                        €{price}
                      </span>
                      <span className="text-xs opacity-80 dark:text-gray-300 ml-1">
                        /Day
                      </span>
                    </div>
                    <Link
                      to={`/${type}/${id}/confirm-booking`}
                      className="btn btn-primary px-4 py-2 rounded-full shadow-lg hover:scale-105 hover:bg-secondaryYellow hover:text-gray-900 transition-all duration-200 font-semibold text-sm"
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

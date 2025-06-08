// import Banner from "../components/common/Banner";
import GuidesCity from "../banners/city-guide.jpg";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { tourPackages } from "../data/dummyData";
import { Explore } from "../components/home";
const CityGuide = () => {
  const handleGuideClick = (city) => {
    console.log("Guide clicked:", city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Banner */}
      <div className="relative h-80 md:h-[28rem] flex items-center justify-center overflow-hidden mb-8">
        <img
          src={GuidesCity}
          alt="City Guide Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-0 brightness-75 animate-fadeIn "
          style={{ animation: "fadeIn 1.5s forwards" }}
        />
        <div
          className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 md:h-32"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--tw-gradient-to, #f3f4f6) 100%)",
          }}
        />
        <div className="relative z-10 bg-white/70 dark:bg-gray-900/70 rounded-xl px-8 py-6 shadow-lg text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 dark:text-white drop-shadow-lg tracking-tight">
            Discover Albania’s Cities
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-200 text-lg">
            Your perfect guide is just a click away.
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
      <div className="mt-8 px-[3%] md:px-[10%]">
        <div className="pt-10 pb-20">
          <div className="text-center mb-10">
            <h1 className="heading text-4xl md:text-5xl font-extrabold dark:text-white">
              Book Your Guide on the Best Cities in Albania
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The most searched for cities on TipGuide
            </p>
          </div>
          <div className="mt-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tourPackages.map(
              ({
                id,
                name,
                rating,
                image,
                number_of_reviews,
                price,
                description,
              }) => (
                <div
                  key={id}
                  className="bg-white dark:bg-card-dark rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden border border-blue-100 dark:border-gray-800 hover:scale-105 transform transition-transform"
                >
                  <div className="relative">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white/80 dark:bg-gray-900/80 rounded-full px-3 py-1 flex items-center gap-1 shadow text-blue-800 dark:text-yellow-300 font-semibold text-sm">
                      <FaStar className="text-secondaryYellow" />
                      {rating}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-2xl font-bold mb-1 dark:text-white text-blue-900">
                      {name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-base line-clamp-2">
                      {description ||
                        "Experience the best of this city with a local guide who knows all the hidden gems and must-see spots."}
                    </p>
                    <div className="flex items-center gap-x-2 mb-3">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {number_of_reviews} reviews
                      </span>
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        €{price}
                      </span>
                      <span className="ml-2 text-base opacity-80 text-gray-600 dark:text-gray-300">
                        /Day
                      </span>
                    </div>
                    <Link
                      to={`/packet/${id}/confirm-booking`}
                      className="btn btn-primary text-lg py-3 mt-auto rounded-lg shadow hover:bg-secondaryYellow/90 transition-colors duration-200 flex items-center justify-center gap-2"
                      onClick={() =>
                        handleGuideClick({
                          id,
                          name,
                          rating,
                          image,
                          number_of_reviews,
                          price,
                        })
                      }
                    >
                      <span>Book Now</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="mt-16 rounded-2xl shadow-xl p-8 flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          <h2 className="text-3xl font-bold mb-3 text-blue-800 dark:text-white">
            We Recommend This Packages
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
    </div>
  );
};

export default CityGuide;

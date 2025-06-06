import Banner from "../components/common/Banner";
import GuidesCity from "../banners/city-guide.jpg";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { tourPackages } from "../data/dummyData";
import { Explore } from "../components/home";
const CityGuide = () => {
  const handleGuideClick = (city) => {
    // Optional: add logic here if needed
    console.log("Guide clicked:", city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Banner
        banner={GuidesCity}
        title="Your best Guide around the best cities"
      />
      <div className="mt-8 px-[3%] md:px-[10%]">
        <div className="pt-10 pb-20">
          <div className="text-center mb-10">
            <h1 className="heading text-4xl md:text-5xl font-extrabold  dark:text-white">
              Book Your Guide on the Best Cities in Albania
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The most searched for cities on TipGuide
            </p>
          </div>
          <div className="mt-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tourPackages.map(
              ({ id, name, rating, image, number_of_reviews, price }) => (
                <div
                  key={id}
                  className="bg-white dark:bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-2xl font-bold mb-2  dark:text-white">
                      {name}
                    </h2>
                    <div className="flex items-center gap-x-2 mb-3">
                      <FaStar className="text-secondaryYellow text-xl" />
                      <span className="font-semibold text-lg">{rating}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        ({number_of_reviews} reviews)
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
                      className="btn btn-primary text-lg py-3 mt-auto rounded-lg shadow hover:bg-secondaryYellow/90 transition-colors duration-200"
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
                      Book Now
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="mt-16 bg-white/80 dark:bg-card-dark/90 rounded-2xl shadow-xl p-8 flex flex-col items-center">
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
    </div>
  );
};

export default CityGuide;

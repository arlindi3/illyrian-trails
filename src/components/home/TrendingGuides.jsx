import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { trendingCities } from "../../data/dummyData";

const TrendingGuides = () => {
  const handleGuideClick = (city) => {
    // Optional: add logic here if needed
    console.log("Guide clicked:", city);
  };

  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="heading">trending guides</h1>
        <p className="mt-2">The most searched for cities on TipGuide</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {trendingCities.map(
          ({ id, name, rating, image, number_of_reviews, price }) => (
            <div
              key={id}
              className="p-3 bg-white !opacity-100 rounded-lg dark:bg-card-dark flex-1 basis-[20rem]"
            >
              <div className="flex-align-center gap-x-4">
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-xl font-semibold">{name}</h1>
                  <div className="flex-align-center gap-x-2">
                    <FaStar className="text-secondaryYellow" />
                    <p>
                      {rating}
                      <span className="opacity-70">({number_of_reviews})</span>
                    </p>
                  </div>
                  <h1>
                    <span className="text-xl font-bold">€{price}</span>
                    <span className="text-sm opacity-80">/Day</span>
                  </h1>
                  <Link
                    to={`/packet/${id}/confirm-booking`}
                    className="btn btn-secondary block text-center mt-3"
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
                    book now
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

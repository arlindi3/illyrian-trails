// /houses/HouseDetails.jsx
import { useParams } from "react-router-dom";
import { houses } from "../houses/housesData";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Tabs as TabWrapper, TabList, TabPanel, Tab } from "react-tabs";
import Description from "./Description";
import Amenities from "./Amenities";
import Features from "./Features";
import Reviews from "./Reviews";
import PriceDetails from "./PriceDetails";

const HouseDetails = () => {
  const { id } = useParams();
  const house = houses.find((h) => h.id === id);

  if (!house) return <p>House not found.</p>;

  return (
    <div className="pt-16 px-6">
      <h1 className="text-3xl font-bold">{house.title}</h1>
      <p className="text-gray-600">{house.location}</p>
      <div className="flex items-center gap-2 mt-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            {i < Math.floor(house.rating) ? <FaStar /> : <FaStarHalfAlt />}
          </span>
        ))}
        <span className="text-sm text-gray-500">({house.reviews} reviews)</span>
      </div>

      {/* Images */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {house.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`img-${i}`}
            className="rounded-xl w-full h-48 object-cover"
          />
        ))}
      </div>

      {/* Tabs with description, price, etc. */}
      <div className="mt-8">
        <div className="mt-5 flex-align-center gap-2 sm:gap-3 flex-col sm:flex-row">
          <div className="flex-align-center gap-x-2 sm:gap-x-3">
            <span className="text-sm text-green-500 bg-green-500/20 px-2 rounded">
              {house.rating}
            </span>
            <span className="text-sm text-secondaryYellow bg-secondaryYellow/20 px-2 rounded">
              Good
            </span>
            <span className="text-sm text-orange-500 bg-orange-500/20 px-2 rounded">
              Popular
            </span>
          </div>
          <div className="flex-align-center gap-x-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="text-secondaryYellow">
                {i < Math.floor(house.rating) ? <FaStar /> : <FaStarHalfAlt />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold capitalize mt-4">
              {house.title}
            </h2>
            <p className="mt-2">{house.location}</p>

            <div className="pt-10">
              <TabWrapper>
                <TabList>
                  <Tab>Description</Tab>
                  <Tab>Features</Tab>
                  <Tab>Price</Tab>
                  <Tab>Reviews</Tab>
                </TabList>
                <TabPanel>
                  <Description description={house.description} />
                </TabPanel>
                <TabPanel>
                  <Features features={house.features} />
                </TabPanel>
                <TabPanel>
                  <PriceDetails price={house.price} />
                </TabPanel>
                <TabPanel>
                  <Reviews reviews={house.reviewsData} />
                </TabPanel>
              </TabWrapper>
            </div>

            <Amenities amenities={house.amenities} />
            <button className="btn btn-primary mt-5">more details</button>
          </div>
          <p className="mt-4">{house.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;

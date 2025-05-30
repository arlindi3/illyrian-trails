import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { Tabs as TabWrapper, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  Description,
  Features,
  PriceDetails,
  Reviews,
  Amenities,
  AddReview,
  Trending,
} from "../components/hotel-details"; // ose të tjera specifike për shtëpitë

const Houses = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <h1 className="text-3xl md:text-4xl font-bold capitalize">
        available houses
      </h1>
      <div className="mt-4 flex-align-center gap-x-3">
        <div className="flex-align-center gap-x-2">
          <FaStar className="text-secondaryYellow" />
          <p>
            4.5
            <span className="opacity-70">(120 reviews)</span>
          </p>
        </div>
        <div className="flex-align-center gap-x-2">
          <BiMap />
          <p>New York, USA</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap rounded-xl gap-4 overflow-hidden">
        <div className="group overflow-hidden flex-1 basis-[30rem]">
          <img
            src={`${process.env.PUBLIC_URL}/images/hotel (1).jpg`}
            alt="house main"
            className="group-hover:scale-125 transition-a"
          />
        </div>
        <div className="flex-1 basis-[16rem]">
          <div className="group overflow-hidden h-[150px]">
            <img
              src={`${process.env.PUBLIC_URL}/images/hotel (2).jpg`}
              alt="house detail 1"
              className="group-hover:scale-125 transition-a"
            />
          </div>
          <div className="mt-3 group overflow-hidden h-[150px]">
            <img
              src={`${process.env.PUBLIC_URL}/images/hotel (3).jpg`}
              alt="house detail 2"
              className="group-hover:scale-125 transition-a"
            />
          </div>
          <div className="mt-3 group overflow-hidden h-[150px]">
            <img
              src={`${process.env.PUBLIC_URL}/images/hotel (4).jpg`}
              alt="house detail 3"
              className="group-hover:scale-125 transition-a"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex-align-center gap-2 sm:gap-3 flex-col sm:flex-row">
        <div className="flex-align-center gap-x-2 sm:gap-x-3">
          <span className="text-sm text-green-500 bg-green-500/20 px-2 rounded">
            4.5
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
              {i < 4 ? <FaStar /> : <FaStarHalfAlt />}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold capitalize mt-4">
            cozy house for sale
          </h2>
          <p className="mt-2">New York, USA</p>

          <div className="pt-10">
            <TabWrapper>
              <TabList>
                <Tab>Description</Tab>
                <Tab>Features</Tab>
                <Tab>Price</Tab>
                <Tab>Reviews</Tab>
              </TabList>
              <TabPanel>
                <Description />
              </TabPanel>
              <TabPanel>
                <Features />
              </TabPanel>
              <TabPanel>
                <PriceDetails />
              </TabPanel>
              <TabPanel>
                <Reviews />
              </TabPanel>
            </TabWrapper>
          </div>

          <Amenities />
          <button className="btn btn-primary mt-5">more details</button>
        </div>
        <div className="lg:col-span-1">
          {/* Ndryshe mund ta vendosësh PriceDetails ose info të tjera */}
        </div>
      </div>

      <AddReview />
      <Trending />
    </div>
  );
};

export default Houses;

import React from "react";
import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
// import FlightBanner from "../banners/flights.jpg";
import { BestWay, Deals, FAQs } from "../components/flights";
import House from "../banners/house.jpg";

const Houses = () => {
  return (
    <div>
      <Banner banner={House} title="Your best and comfortable boat ride" />
      <NavFilters url="/speedboat/search" />
      <div className="mt-5 px-[3%] md:px-[6%]">
        <BestWay />
        <Deals />
        <FAQs />
      </div>
    </div>
  );
};

export default Houses;

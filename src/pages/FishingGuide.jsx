import React from "react";
import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
import { BestWay, Deals, FAQs } from "../components/flights";
import Fishing from "../banners/fishing boat.jpg";

const FishingGuide = () => {
  return (
    <div>
      <Banner banner={Fishing} title="Your best and comfortable boat ride" />
      <NavFilters url="/speedboat/search" />
      <div className="mt-5 px-[3%] md:px-[6%]">
        <BestWay />
        <Deals />
        <FAQs />
      </div>
    </div>
  );
};

export default FishingGuide;

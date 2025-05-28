import React from "react";
import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
import { BestWay, Deals, FAQs } from "../components/flights";
import Horse from "../banners/bootlove • Instagram.jpg";

const HorseGuide = () => {
  return (
    <div>
      <Banner banner={Horse} title="Your best and comfortable boat ride" />
      <NavFilters url="/speedboat/search" />
      <div className="mt-5 px-[3%] md:px-[6%]">
        <BestWay />
        <Deals />
        <FAQs />
      </div>
    </div>
  );
};

export default HorseGuide;

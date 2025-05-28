import React from "react";
import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
// import FlightBanner from "../banners/flights.jpg";
import { BestWay, Deals, FAQs } from "../components/flights";
import Motor from "../banners/EAHORA M1P PLUS― the most popular electric….jpg";

const MotorRental = () => {
  return (
    <div>
      <Banner banner={Motor} title="Your best and comfortable motor rental" />
      <NavFilters url="/motors/search" />
      <div className="mt-5 px-[3%] md:px-[6%]">
        <BestWay />
        <Deals />
        <FAQs />
      </div>
    </div>
  );
};

export default MotorRental;

import React from "react";
import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
// import HomeBanner from "../banners/banner.jpg";
import HomeBanner from "../banners/saranda.jpg";
import {
  // BestPlaces,
  Explore,
  FeaturedDestinations,
  // TopTours,
  TravelPassion,
  TrendingGuides,
} from "../components/home";

const Home = () => {
  return (
    <div>
      <Banner
        banner={HomeBanner}
        title="Adventure Nature Culture"
        imgClassName="w-full h-full object-cover object-center bg-no-repeat bg-cover"
      />
      <NavFilters url="/hotels/search" />
      <div className="mt-5 px-[3%] md:px-[6%]">
        {/* <BestPlaces /> */}
        {/* <TopTours /> */}
        <Explore />
        <FeaturedDestinations />
        <TrendingGuides />
        <TravelPassion />
      </div>
    </div>
  );
};

export default Home;

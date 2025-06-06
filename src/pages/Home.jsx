import React from "react";
import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
// import HomeBanner from "../banners/banner.jpg";
import HomeBanner from "../banners/saranda.jpg";
import { motion } from "framer-motion";

import {
  // BestPlaces,
  Explore,
  // FeaturedDestinations,
  // TopTours,
  TravelPassion,
  TrendingGuides,
} from "../components/home";

const Home = () => {
  // Import Framer Motion for animations

  return (
    <div>
      <Banner
        banner={HomeBanner}
        title="Adventure Nature Culture"
        imgClassName="w-full h-full object-cover object-center bg-no-repeat bg-cover"
      />
      <NavFilters url="/hotels/search" />
      <motion.div
        className="mt-5 px-[3%] md:px-[6%]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* <BestPlaces /> */}
        {/* <TopTours /> */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Explore />
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FeaturedDestinations />
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <TrendingGuides />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TravelPassion />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

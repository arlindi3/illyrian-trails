import React from "react";
// import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
// import HomeBanner from "../banners/banner.jpg";
import HomeBanner from "../banners/homebanner.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <>
      <div className="relative w-full h-[650px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={HomeBanner}
          alt="Home Banner"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-60 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 pointer-events-none z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 mt-24 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 animate-fadeInDown">
            Adventure <span className="text-primary-400">Nature</span> Culture
          </h1>
          <p className="text-lg md:text-2xl text-white/95 mb-6 max-w-2xl animate-fadeInUp drop-shadow-lg">
            Discover breathtaking destinations, unique experiences, and your
            next unforgettable journey.
          </p>
          <Link
            to="/city-guide"
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded shadow transition"
          >
            Book Your Trip
          </Link>
          <Link
            to="/contact"
            className="bg-white/90 hover:bg-white text-primary-700 dark:bg-primary-400 dark:hover:bg-primary-500 dark:text-white font-semibold py-2 px-6 rounded shadow transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
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
    </>
  );
};

export default Home;

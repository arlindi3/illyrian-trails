import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

// import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import Navbar from "./components/common/Navbar";
// import NewsLetter from "./components/common/NewsLetter";

import { closeDropdown, closeNotifications } from "./features/uiSlice";

import {
  Blog,
  BlogPost,
  Bookings,
  BookingSuccess,
  CarDetails,
  CarRental,
  CarsSearch,
  ConfirmBooking,
  // Flights,
  FlightsSearch,
  Home,
  // PacketDetails,
  Login,
  PageNotFound,
  // Profile,
  Register,
  Rewards,
  Wallet,
} from "./pages";

import HotelSearch from "./pages/HotelsSearch";
import SpeedBoat from "./pages/SpeedBoat";
import MotorRental from "./pages/MotorRental";
import FishingGuide from "./pages/FishingGuide";
import HorseGuide from "./pages/HorseGuide";
import PacketDetails from "./pages/PacketDetails";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Houses from "./pages/Houses";
import CityGuide from "./pages/CityGuide";
import HouseDetails from "./components/houses/HouseDetails";
import Layout from "./components/common/Layout";

function App() {
  // const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowButton(window.scrollY > 500);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const handleCloseDropdown = () => {
    dispatch(closeDropdown());
    dispatch(closeNotifications());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleLoad = () => setShowLoader(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div>
      {showLoader && <Loader />}
      <Navbar />
      <div className="min-h-screen" onClick={handleCloseDropdown}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/houses"
            element={
              <Layout>
                <Houses />
              </Layout>
            }
          />
          <Route
            path="/houses/:id"
            element={
              <Layout>
                <HouseDetails />
              </Layout>
            }
          />
          <Route
            path="/city-guide"
            element={
              <Layout>
                <CityGuide />
              </Layout>
            }
          />
          <Route
            path="/speedboat"
            element={
              <Layout>
                <SpeedBoat />
              </Layout>
            }
          />
          <Route
            path="/cars"
            element={
              <Layout>
                <CarRental />
              </Layout>
            }
          />
          <Route
            path="/motors"
            element={
              <Layout>
                <MotorRental />
              </Layout>
            }
          />
          <Route
            path="/fishing-guide"
            element={
              <Layout>
                <FishingGuide />
              </Layout>
            }
          />
          <Route
            path="/horseback-riding"
            element={
              <Layout>
                <HorseGuide />
              </Layout>
            }
          />
          <Route
            path="/hotels/search"
            element={
              <Layout>
                <HotelSearch />
              </Layout>
            }
          />
          <Route
            path="/cars/search"
            element={
              <Layout>
                <CarsSearch />
              </Layout>
            }
          />
          <Route
            path="/flights/search"
            element={
              <Layout>
                <FlightsSearch />
              </Layout>
            }
          />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/bookings"
            element={
              <Layout>
                <Bookings />
              </Layout>
            }
          />
          <Route
            path="/packet/:id/confirm-booking"
            element={
              <Layout>
                <ConfirmBooking />
              </Layout>
            }
          />
          <Route
            path="/packet/:id/booking-sucess"
            element={
              <Layout>
                <BookingSuccess />
              </Layout>
            }
          />
          <Route
            path="/packets/:id"
            element={
              <Layout>
                <PacketDetails />
              </Layout>
            }
          />
          <Route
            path="/cars/:id"
            element={
              <Layout>
                <CarDetails />
              </Layout>
            }
          />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      {/* <NewsLetter /> */}
      <Footer />
      {/* <BackToTopButton showButton={showButton} /> */}
      <WhatsAppButton />
    </div>
  );
}

export default App;

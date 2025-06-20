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
  Bookings,
  BookingSuccess,
  CarDetails,
  CarRental,
  CarsSearch,
  ConfirmBooking,
  Home,
  Login,
  PageNotFound,
  Register,
  Rewards,
  Wallet,
} from "./pages";

import HotelSearch from "./pages/HotelsSearch";
import SpeedBoat from "./pages/SpeedBoat";
import FishingGuide from "./pages/FishingGuide";
import HorseGuide from "./pages/HorseGuide";
import PacketDetails from "./pages/PacketDetails";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Houses from "./pages/Houses";
import CityGuide from "./pages/CityGuide";
import Layout from "./components/common/Layout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Atv from "./pages/Atv";

function App() {
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
  function usePageTracking() {
    const location = useLocation();

    useEffect(() => {
      window.gtag("config", "G-1N3FZNH5BB", {
        page_path: location.pathname,
      });
    }, [location]);
  }
  usePageTracking();

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
          {/* <Route
            path="/houses/:id"
            element={
              <Layout>
                <HouseDetails />
              </Layout>
            }
          /> */}
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
            path="/atv"
            element={
              <Layout>
                <Atv />
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
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
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

          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/rewards" element={<Rewards />} />

          <Route
            path="/bookings"
            element={
              <Layout>
                <Bookings />
              </Layout>
            }
          />
          <Route
            path="/:type/:id/confirm-booking"
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

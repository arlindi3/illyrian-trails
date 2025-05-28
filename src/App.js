import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import Navbar from "./components/common/Navbar";
import NewsLetter from "./components/common/NewsLetter";

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
  HotelDetails,
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

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Route path="/hotels" element={<Home />} />
          <Route path="/speedboat" element={<SpeedBoat />} />
          <Route path="/cars" element={<CarRental />} />
          <Route path="/motors" element={<MotorRental />} />
          <Route path="/fishing" element={<FishingGuide />} />
          <Route path="/horse" element={<HorseGuide />} />
          <Route path="/hotels/search" element={<HotelSearch />} />
          <Route path="/cars/search" element={<CarsSearch />} />
          <Route path="/flights/search" element={<FlightsSearch />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route
            path="/hotels/:id/confirm-booking"
            element={<ConfirmBooking />}
          />
          <Route
            path="/hotel/:id/booking-sucess"
            element={<BookingSuccess />}
          />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <NewsLetter />
      <Footer />
      <BackToTopButton showButton={showButton} />
    </div>
  );
}

export default App;

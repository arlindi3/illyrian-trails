/* eslint-disable react-hooks/exhaustive-deps */
// import { motion } from "framer-motion";
// import { BiBell, BiCaretDown } from "react-icons/bi";
// import { BiBell } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  closeNotifications,
  // toggleDropdown,
  // toggleNotifications,
  turnOnDarkMode,
  turnOnLightMode,
  uiStore,
} from "../../features/uiSlice";
// import Dropdown from "./DropDown";
// import Notifications from "./Notifications";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const rootDoc = document.querySelector(":root");
  const { mode } = useSelector(uiStore);
  const dispatch = useDispatch();

  const setDarkMode = () => {
    dispatch(turnOnDarkMode());
    rootDoc.classList.add("dark");
  };

  const setLightMode = () => {
    dispatch(turnOnLightMode());
    rootDoc.classList.remove("dark");
  };

  // Store mode value to localStorage;
  useEffect(() => {
    rootDoc.classList.add(`${mode}`);
    localStorage.setItem("TripGuide-theme-mode", JSON.stringify(mode));
  }, [mode]);

  // Handle dropdown and notifications close
  const handleClose = (e) => {
    if (!e.target.classList.contains("dropdown-btn")) {
      dispatch(closeDropdown());
    }
    if (!e.target.classList.contains("notification-btn")) {
      dispatch(closeNotifications());
    }
  };

  return (
    <div
      className="fixed z-40 w-full px-3 py-2 bg-white/60 navbar lg:px-6 dark:bg-card-dark/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="flex-center-between">
        <div className="gap-1 flex-align-center md:gap-3">
          <div className="block md:hidden">
            <MobileMenu />
          </div>
          <Link to="/" className="flex-shrink-0 !opacity-100 hidden md:block">
            <img
              src={
                mode === "dark"
                  ? `${process.env.PUBLIC_URL}/logo-dark.png`
                  : `${process.env.PUBLIC_URL}/logo-light.png`
              }
              alt="logo"
              className="w-[5rem]"
            />
          </Link>

          <Link to="/" className="flex-shrink-0 !opacity-100 md:hidden">
            <img
              src={
                mode === "dark"
                  ? `${process.env.PUBLIC_URL}/logo-dark.png`
                  : `${process.env.PUBLIC_URL}/logo-light.png`
              }
              alt="logo"
              className="w-8"
            />
          </Link>
          <Link
            to="/"
            className="text-xl font-semibold text-gray-800 dark:text-white "
          >
            Ilyrian Trails
          </Link>
        </div>

        {/* <div className="flex-align-center gap-x-3 md:gap-x-1">
          <div className="flex-align-center gap-x-3 sm:cursor-pointer">
            <span className="uppercase">eur</span>
            <img
              src={`${process.env.PUBLIC_URL}/images/euro.png`}
              alt=""
              className="w-5 rounded-full"
            />
          </div> */}
        {/*---------------------- Notifications toggle------------------------------------------------ */}
        {
          /* <div
            className="icon-box !opacity-100 relative notification-btn"
            onClick={() => dispatch(toggleNotifications())}
          >
            <div className="relative">
              <BiBell className="notification-btn text-muted" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full notification-btn"></div>
            </div>
            <Notifications />
          </div> */
          /* ---------------------------------Theme toggle------------------------------ */
          <>
            <div className="gap-3 px-2 py-1 rounded-lg select-none flex-align-center bg-transparent w-fit ml-auto md:mr-18">
              <Link
                to="/about"
                className="px-4 py-2 rounded-lg font-medium hover:underline transition-colors hidden md:inline-block bg-transparent hover:bg-transparent text-gray-800 dark:text-white"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-lg font-medium hover:underline transition-colors hidden md:inline-block bg-transparent hover:bg-transparent text-gray-800 dark:text-white"
              >
                Contact
              </Link>
              {/* <a
                href="tel:+1234567890"
                className="px-4 py-2 rounded-lg font-medium hover:underline transition-colors hidden md:inline-block bg-transparent hover:bg-transparent text-gray-800 dark:text-white"
              >
                +355 673869970
              </a> */}
              <div
                className={`sm:cursor-pointer ${
                  mode === "light"
                    ? "bg-yellow-200 border border-yellow-400 shadow rounded-lg px-3 py-1"
                    : "bg-transparent"
                } text-gray-800 dark:text-white transition-colors`}
                onClick={setLightMode}
                title="Light mode"
              >
                <FiSun />
              </div>
              <div
                className={`sm:cursor-pointer ${
                  mode === "dark"
                    ? "bg-slate-700 border border-slate-500 shadow rounded-lg px-3 py-1"
                    : "bg-transparent"
                } text-gray-800 dark:text-white transition-colors`}
                onClick={setDarkMode}
                title="Dark mode"
              >
                <FiMoon />
              </div>
            </div>
          </>
          /*------------------------------- Profile Dropdown toggle-------------------------------------------- */
        }
        {/* <div className="relative flex-shrink-0 space-x-1 flex-align-center md:pl-4">
            <div
              className="absolute top-0 left-0 w-full h-full dropdown-btn sm:cursor-pointer"
              onClick={() => dispatch(toggleDropdown())}
            ></div>
            <motion.img
              src={`${process.env.PUBLIC_URL}/images/avatar.png`}
              alt=""
              className="w-8 h-8 rounded-full dropdown-btn"
              whileTap={{ scale: 0.5 }}
            />

            <BiCaretDown className="dropdown-btn" />
            <Dropdown />
          </div> */}
      </div>
    </div>
    // </div>
  );
};

export default Navbar;

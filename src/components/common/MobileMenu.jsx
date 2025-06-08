import { FiMenu, FiChevronDown, FiMap, FiHome, FiPhone } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiCar } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden text-2xl p-2 focus:outline-none relative z-50 text-gray-800 dark:text-white"
        aria-label="Open Menu"
      >
        <FiMenu />
      </button>

      {/* Animated Fullscreen Menu from Left */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 left-0 w-full h-screen z-40 bg-white dark:bg-gray-900 shadow-xl px-6 pt-20 overflow-y-auto"
          >
            {/* Close button */}
            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-gray-800 dark:text-white text-3xl focus:outline-none cursor-pointer"
              aria-label="Close Menu"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              &times;
            </motion.button>

            <div className="flex flex-col gap-6">
              {/* Houses */}
              <MenuItem
                icon={<FiHome />}
                label="Houses"
                to="/houses"
                setMenuOpen={setMenuOpen}
                delay={0.1}
              />

              {/* Car Rental */}
              <MenuItem
                icon={<BiCar />}
                label="Car Rental"
                to="/cars"
                setMenuOpen={setMenuOpen}
                delay={0.15}
              />

              {/* Guides */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => setGuidesOpen(!guidesOpen)}
                  className="flex items-center justify-between w-full text-xl font-medium text-gray-800 dark:text-white hover:text-yellow-400 transition"
                >
                  <div className="flex items-center gap-3">
                    <FiMap />
                    Guides
                  </div>
                  <FiChevronDown
                    className={`transition-transform ${
                      guidesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {guidesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="ml-6 mt-2 flex flex-col gap-2"
                    >
                      <SubLink
                        label="City Guide"
                        to="/city-guide"
                        setMenuOpen={setMenuOpen}
                      />
                      <SubLink
                        label="SpeedBoat"
                        to="/speedboat"
                        setMenuOpen={setMenuOpen}
                      />
                      <SubLink
                        label="Horseback Riding"
                        to="/horseback-riding"
                        setMenuOpen={setMenuOpen}
                      />
                      <SubLink
                        label="4 Wheel Motors"
                        to="/guides/4wheel"
                        setMenuOpen={setMenuOpen}
                      />
                      <SubLink
                        label="Fishing Guide"
                        to="/fishing-guide"
                        setMenuOpen={setMenuOpen}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* About */}
              <MenuItem
                icon={<AiOutlineInfoCircle />} // Changed icon to FiMap for About
                label="About"
                to="/about"
                setMenuOpen={setMenuOpen}
                delay={0.22}
              />

              {/* Contact */}
              <MenuItem
                icon={<FiPhone />}
                label="Contact"
                to="/contact"
                setMenuOpen={setMenuOpen}
                delay={0.25}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MenuItem = ({ icon, label, to, setMenuOpen, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ delay }}
  >
    <Link
      to={to}
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-3 text-xl font-medium text-gray-800 dark:text-white hover:text-yellow-400 transition relative group"
    >
      {icon}
      <span>{label}</span>
      <span className="absolute bottom-[-2px] left-0 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-300" />
    </Link>
  </motion.div>
);

const SubLink = ({ label, to, setMenuOpen }) => (
  <Link
    to={to}
    onClick={() => setMenuOpen(false)}
    className="text-base text-gray-600 dark:text-gray-300 hover:text-yellow-400 transition relative group"
  >
    {label}
    <span className="absolute bottom-[-2px] left-0 h-[1.5px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-300" />
  </Link>
);

export default MobileMenu;

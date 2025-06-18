import React from "react";
import { BiCar } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
import { GiSpeedBoat, GiFishing } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";
import { FaHorse } from "react-icons/fa";
import { MdExplore, MdMap } from "react-icons/md";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: <MdExplore size={24} /> },
  { to: "/city-guide", label: "City Guide", icon: <MdMap size={24} /> },
  { to: "/houses", label: "Houses", icon: <BiBed size={24} /> },
  {
    to: "/speedboat",
    label: "Speedboat Guide",
    icon: <GiSpeedBoat size={24} />,
  },
  { to: "/cars", label: "Car Rental", icon: <BiCar size={24} /> },
  {
    to: "/fishing-guide",
    label: "Fishing Guide",
    icon: <GiFishing size={24} />,
  },
  { to: "/atv", label: "Atv Guide", icon: <FaMotorcycle size={24} /> },
  {
    to: "/horseback-riding",
    label: "Horse Guide",
    icon: <FaHorse size={24} />,
  },
];

const NavFilters = () => {
  return (
    <div className="w-full px-4 py-4 bg-white dark:bg-card-dark shadow-lg dark:shadow-none rounded-xl max-w-[95%] mx-auto mt-3">
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row lg:justify-between gap-4">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `flex flex-col items-center justify-center text-center gap-y-1 p-4 rounded-xl transition duration-200 ease-in-out transform ${
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-100 dark:bg-hover-color-dark text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary"
                } hover:scale-[1.03]`
              }
            >
              {icon}
              <span className="text-sm font-medium">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavFilters;

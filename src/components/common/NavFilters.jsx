import React from "react";
import { BiBed, BiCar } from "react-icons/bi";
import { GiSpeedBoat } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { GiFishing } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";
import { FaHorse } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const NavFilters = ({ url }) => {
  const navigate = useNavigate(); // <-- initialize navigate

  const handleSearch = () => {
    navigate(url); // <-- navigate to the url prop
  };
  return (
    <div className="w-full p-4 bg-white dark:bg-card-dark dark:shadow-none max-w-[90%] mx-auto rounded-xl -mt-10 card-shadow">
      <div className="flex-col py-3 border-0 gap-y-8 md:gap-y-0 flex-center-center md:flex-center-between md:flex-row md:border-b dark:border-dark ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4 mb-4">
          <NavLink to="/" end className="flex-align-center gap-x-2">
            <BiBed size={30} />
            <p>Hotels</p>
          </NavLink>
          <NavLink to="/speedboat" className="flex-align-center gap-x-2">
            <GiSpeedBoat size={30} />
            <p>Speedboat</p>
          </NavLink>
          <NavLink to="/cars" className="flex-align-center gap-x-2">
            <BiCar size={30} />
            <p>Car Rental</p>
          </NavLink>
          <NavLink to="/motors" className="flex-align-center gap-x-2">
            <FaMotorcycle size={30} />

            <p>Motors Rental</p>
          </NavLink>
          <NavLink to="/fishing" className="flex-align-center gap-x-2">
            <GiFishing size={30} />
            <p>Fishing Guide</p>
          </NavLink>
          <NavLink to="/horse" className="flex-align-center gap-x-2">
            <FaHorse size={30} />
            <p>Horse Guide</p>
          </NavLink>
        </div>
        <div className="flex-align-center gap-x-2">
          <select className="bg-transparent border-0 outline-none text-slate-500 dark:text-slate-300 dark:bg-card-dark ">
            <option value="round-trip">Round Trip</option>
            <option value="round-trip">Holiday Trip</option>
            <option value="round-trip">Vacation</option>
            <option value="round-trip">Tour Trip</option>
          </select>
          <select className="bg-transparent border-0 outline-none text-slate-500 dark:text-slate-300 dark:bg-card-dark">
            <option value="round-trip">1 Passenger</option>
            <option value="round-trip">2 Passengers</option>
            <option value="round-trip">3 Passengers</option>
            <option value="round-trip">4 Passengers</option>
            <option value="round-trip">5 Passengers</option>
            <option value="round-trip">Over 5 Passengers</option>
          </select>
        </div>
      </div>
      <div className="flex-col mt-4 gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row">
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Location</h1>
            <input
              type="text"
              className="w-full bg-transparent border-0 outline-none"
              placeholder="Where are you from?"
            />
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Destination</h1>
            <input
              type="text"
              className="w-full bg-transparent border-0 outline-none"
              placeholder="Where are you going?"
            />
          </div>
        </div>
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Check in</h1>
            <input
              type="text"
              className="w-full bg-transparent border-0 outline-none"
              placeholder="Add date"
            />
          </div>
          <div className="flex-1 w-full p-2 border rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark dark:border-dark-light">
            <h1 className="font-bold">Check out</h1>
            <input
              type="text"
              className="w-full bg-transparent border-0 outline-none"
              placeholder="Add date"
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full text-center !opacity-100 btn btn-primary md:w-fit"
          onClick={handleSearch}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default NavFilters;

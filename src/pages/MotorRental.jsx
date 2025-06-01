import { motors } from "../components/motors/motorData";
import { FaCogs, FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import Banner from "../components/common/Banner";
import MotorBanner from "../banners/EAHORA M1P PLUS― the most popular electric….jpg";
import { Explore } from "../components/home";

const MotorRental = () => {
  return (
    <>
      <Banner banner={MotorBanner} title="Find your best Motor to Rent" />

      <div className="min-h-screen pt-24 px-6 md:px-12 pb-16 bg-gray-50 dark:bg-card-dark">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Motor Rental
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {motors.map((motor) => (
            <div
              key={motor.id}
              className="bg-white dark:bg-dark-light rounded-xl shadow-lg border hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={motor.image}
                alt={motor.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-5 space-y-3">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-white">
                  {motor.name}
                </h2>
                <p className="text-primary dark:text-secondary text-xl font-semibold">
                  €{motor.pricePerDay} <span className="text-sm">/day</span>
                </p>

                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <p className="flex items-center gap-2">
                    <FaUserFriends className="text-primary dark:text-secondary" />
                    {motor.seats} Seats
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCogs className="text-primary dark:text-secondary" />
                    {motor.gear}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-primary dark:text-secondary" />
                    {motor.year}
                  </p>
                </div>

                <button className="mt-4 w-full bg-primary text-white py-2 rounded-full hover:bg-primary/90 transition">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white/80 dark:bg-card-dark/80 rounded-2xl shadow-xl p-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-3 text-blue-800 dark:text-blue-200">
            Recommended Packages
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-300 max-w-2xl text-center">
            Explore our exclusive packages for a complete and comfortable stay.
            Choose from curated deals that include amenities, local experiences,
            and more to make your trip memorable.
          </p>
          <div className="w-full">
            <Explore />
          </div>
        </div>
      </div>
    </>
  );
};

export default MotorRental;

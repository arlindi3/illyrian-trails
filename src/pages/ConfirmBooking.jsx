import { useParams } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { trendingCities } from "../data/dummyData";

const ConfirmBooking = () => {
  const { id } = useParams();
  const guide = trendingCities.find((city) => String(city.id) === String(id));

  if (!guide) {
    return (
      <div className="text-center text-red-500 text-xl pt-10">
        Guide not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 md:px-10 pb-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Titulli dhe lokacioni */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-1">
          {guide.name}
        </h1>
        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-300 mb-6">
          <FaMapMarkerAlt className="text-xl text-primary dark:text-secondary" />
          <p className="text-lg">{guide.location || "Albania"}</p>
        </div>

        {/* Video prezantuese */}
        {guide.video && (
          <div className="aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <iframe
              src={guide.video}
              title="Guide video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )}

        {/* Galeri fotosh */}
        {guide.gallery?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {guide.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="rounded-xl object-cover h-64 w-full shadow hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        )}

        {/* Rating & description */}
        <div className="flex items-center gap-2 text-yellow-500 text-lg mb-2">
          <FaStar />
          <span className="font-semibold">{guide.rating}</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            ({guide.number_of_reviews} reviews)
          </span>
        </div>

        <p className="mb-8 text-gray-700 dark:text-gray-200 leading-relaxed text-lg">
          {guide.description ||
            "Explore this destination with a local guide. Enjoy a unique, authentic, and unforgettable experience."}
        </p>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-700 dark:text-white mb-3">
              Price
            </h2>
            <p className="text-2xl font-semibold text-primary dark:text-secondary">
              €{guide.price}{" "}
              <span className="text-sm text-gray-600 dark:text-gray-300">
                / day
              </span>
            </p>
          </div>

          <div className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-700 dark:text-white mb-3">
              What’s Included
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                <FaCheckCircle className="inline mr-2 text-green-500" />
                Local guide
              </li>
              <li>
                <FaCheckCircle className="inline mr-2 text-green-500" />
                Transportation
              </li>
              <li>
                <FaCheckCircle className="inline mr-2 text-green-500" />
                Refreshments
              </li>
            </ul>
          </div>
        </div>

        {/* Butoni i rezervimit */}
        <div className="text-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg rounded-full shadow-lg transition-all duration-300">
            Confirm Booking
          </button>
          <p className="text-sm mt-3 text-gray-500 dark:text-gray-300">
            You will receive a confirmation email after booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;

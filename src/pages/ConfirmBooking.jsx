import { useParams } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { tourPackages } from "../data/dummyData";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const ConfirmBooking = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const guide = tourPackages.find((city) => String(city.id) === String(id));
  const [selectedImg, setSelectedImg] = useState(guide?.gallery?.[0] || "");
  // const [isBooked, setIsBooked] = useState(false);

  if (!guide) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 dark:from-gray-900 dark:to-gray-800">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl px-8 py-12 text-center">
          <span className="text-5xl mb-4 block">😕</span>
          <div className="text-2xl font-bold text-red-500 mb-2">
            Tour not found.
          </div>
          <p className="text-gray-500 dark:text-gray-300">
            Please check the link or browse our tours.
          </p>
        </div>
      </div>
    );
  }

  // const handleBooking = () => {
  //   setIsBooked(true);
  //   setTimeout(() => {
  //     navigate("/booking-confirmed", { state: { guideId: guide.id } });
  //   }, 1500);
  // };

  const handleBooking = () => {
    // Replace with your WhatsApp number (in international format, no + or spaces)
    const phoneNumber = "355673869970";
    const message = encodeURIComponent(
      `Hello, I would like to book the "${guide.name}" tour in ${guide.location}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-24 px-4 md:px-10 pb-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
              {guide.name}
            </h1>
            <div className="flex items-center gap-2 text-lg">
              <FaMapMarkerAlt className="text-2xl" />
              <p className="font-medium">{guide.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-2 rounded-full shadow">
            <FaStar className="text-yellow-400 text-2xl" />
            <span className="text-xl font-bold">{guide.rating}</span>
            <span className="text-sm">({guide.number_of_reviews} reviews)</span>
          </div>
        </div>

        {/* Main Image & Gallery */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Image */}
          <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700 relative">
            <img
              src={selectedImg}
              alt="Selected"
              className="w-full h-[420px] object-cover object-center transition-all duration-300"
            />
            <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-4 py-1 rounded-full shadow font-semibold text-lg">
              €{guide.price}{" "}
              <span className="text-xs font-normal">/person</span>
            </div>
          </div>
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {guide.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`rounded-xl overflow-hidden border-2 transition-all duration-200 shadow-sm ${
                    selectedImg === img
                      ? "border-emerald-500 scale-105 ring-2 ring-emerald-300"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                  aria-label={`Select gallery image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-24 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow text-center">
              <span className="font-semibold text-lg">
                {guide.gallery.length} Photos
              </span>
            </div>
            {/* Video */}
            {guide.video && (
              <div className="mt-4">
                <video
                  controls
                  className="w-full rounded-xl shadow"
                  style={{ maxHeight: 200 }}
                >
                  <source src={guide.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="text-center text-sm mt-2 text-gray-500 dark:text-gray-300">
                  Place Video
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Description & Ethics */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-emerald-500 rounded-full mr-2"></span>
              About the Tour
            </h2>
            <p className="text-lg leading-relaxed">{guide.description}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-yellow-400 rounded-full mr-2"></span>
              Ethical Commitment
            </h2>
            <ul className="space-y-4">
              <li>
                <b>Respect for Local Culture:</b> Our guides foster cultural
                understanding and encourage respectful interactions with local
                communities.
              </li>
              <li>
                <b>Environmental Responsibility:</b> We minimize our
                environmental impact by following Leave No Trace principles and
                supporting eco-friendly practices.
              </li>
              <li>
                <b>Fair Compensation:</b> All guides and local partners are paid
                fairly and work in safe, supportive conditions.
              </li>
              <li>
                <b>Inclusivity:</b> We welcome travelers of all backgrounds and
                strive to make our tours accessible and enjoyable for everyone.
              </li>
            </ul>
          </div>
        </div>

        {/* Itinerary */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-emerald-400 rounded-full mr-2"></span>
            Itinerary
          </h2>
          <ul className="space-y-4">
            {guide?.itinerary?.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span className="font-semibold min-w-[80px]">{item.time}</span>
                <span>{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Included */}
          <div className="bg-white dark:bg-gray-800 p-7 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Included
            </h3>
            <ul className="space-y-2">
              {guide.included.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          <div className="bg-white dark:bg-gray-800 p-7 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-red-400 rounded-full"></span>
              Not Included
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {guide.notIncluded.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Quick Info */}
          <div className="bg-white dark:bg-gray-800 p-7 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
            <div className="flex flex-col gap-2 text-lg">
              <span>
                <b>Duration:</b> {guide.duration}
              </span>
              <span>
                <b>Group Size:</b> {guide.group_size}
              </span>
              <span>
                <b>Language:</b> {guide.language}
              </span>
            </div>
          </div>
        </div>

        {/* Confirm Booking Button */}
        <div className="text-center pt-6">
          <button
            className="bg-primary hover:bg-primary text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl transition-all tracking-wide  hover:scale-105"
            onClick={handleBooking}
          >
            Book Now on WhatsApp
          </button>
          <p className="mt-4 text-base">
            You will be redirected to WhatsApp to complete your booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;

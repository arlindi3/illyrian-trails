import { useRef, useState } from "react";
import { packagesData } from "../../data/dummyData";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const Explore = () => {
  const [isScroll, setIsscroll] = useState(false);
  const exploreContainer = useRef(null);
  const scrollContainer = (direction) => {
    direction === "right"
      ? (exploreContainer.current.scrollLeft += 200)
      : (exploreContainer.current.scrollLeft -= 200);
    exploreContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };
  return (
    <div className="pt-12 pb-20">
      <div className="flex items-center justify-between px-6 mb-4">
        <div>
          <h1 className="text-3xl font-bold">Explore Our Packages</h1>
          <p className="text-gray-600 dark:text-gray-300 text-base mt-1">
            Discover adventure, culture, family, and luxury packages across
            Albania.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Scroll left"
            className={`p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition ${
              !isScroll ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => scrollContainer("left")}
            disabled={!isScroll}
            type="button"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            aria-label="Scroll right"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition"
            onClick={() => scrollContainer("right")}
            type="button"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="flex gap-x-6 overflow-x-auto hide-scrollbar px-6 py-4"
        ref={exploreContainer}
      >
        {packagesData.map((packet) => (
          <Link
            to={`/${packet.type}/${packet.id}/confirm-booking`}
            key={packet.id}
            className="min-w-[260px] max-w-xs"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 flex flex-col h-full border border-gray-100 dark:border-gray-700 hover:border-primary transition">
              <img
                src={
                  packet.gallery && packet.gallery.length > 0
                    ? packet.gallery[0]
                    : packet.images && packet.images.length > 0
                    ? packet.images[0]
                    : "/default-image.jpg"
                }
                alt={packet.name || packet.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <div className="flex items-center gap-x-2 mb-2">
                <FaStar className="text-yellow-400" />
                <span className="text-gray-700 dark:text-gray-200 text-base font-semibold">
                  {packet.rating}
                </span>
                <span className="ml-auto text-xs text-gray-400">
                  {packet.location}
                </span>
              </div>
              <h2 className="text-lg font-bold mb-1">{packet.title}</h2>
              <span className="text-primary font-bold text-base mb-2">
                €{packet.price}
              </span>
              <span className="text-xs text-gray-500 mt-auto">
                {packet.type}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;

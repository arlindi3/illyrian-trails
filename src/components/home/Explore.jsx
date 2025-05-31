import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { FaStar } from "react-icons/fa";
// import { BiBed, BiMap } from "react-icons/bi";
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
    <div className="pt-10 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="flex-center-between mb-8 px-4">
        <div>
          <h1 className="heading text-3xl font-bold mb-1">
            The Best Packages in Albania
          </h1>
          <p className="mt-2 text-gray-500 text-lg">
            Exquisite and stunning places to spend your holidays
          </p>
        </div>
        <div className="flex-align-center gap-x-3">
          <button
            className={`w-10 h-10 rounded-full grid place-items-center bg-white shadow-md border transition hover:bg-primary hover:text-white sm:cursor-pointer ${
              !isScroll && "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => scrollContainer("left")}
            disabled={!isScroll}
            aria-label="Scroll left"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            className="w-10 h-10 rounded-full grid place-items-center bg-white shadow-md border transition hover:bg-primary hover:text-white sm:cursor-pointer"
            onClick={() => scrollContainer("right")}
            aria-label="Scroll right"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>
      <div
        className="flex-align-center gap-x-6 overflow-x-auto hide-scrollbar scroll-smooth px-4 py-2"
        ref={exploreContainer}
      >
        {packagesData.map((packet) => (
          <Link
            to={`/packets/${packet.id}`}
            key={packet.id}
            className="min-w-[270px] max-w-xs"
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition-all duration-200 border border-gray-100 hover:border-primary group">
              <div className="relative">
                <img
                  src={packet.images[0]}
                  alt={packet.title}
                  className="w-full h-44 object-cover rounded-xl group-hover:scale-105 transition-transform duration-200"
                />
                <span className="absolute top-2 right-2 bg-white/80 rounded-full px-3 py-1 text-sm font-semibold text-primary shadow">
                  €{packet.price}
                </span>
              </div>
              <div className="flex items-center gap-x-2 mt-3">
                <FaStar className="text-secondaryYellow" />
                <p className="font-medium text-gray-700">{packet.rating}</p>
                <span className="ml-auto text-xs text-gray-400">
                  {packet.location}
                </span>
              </div>
              <h2 className="text-lg font-semibold mt-2 text-primary group-hover:text-secondary transition">
                {packet.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;

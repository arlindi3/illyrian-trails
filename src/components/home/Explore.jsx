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
    <div className="pt-12 pb-20">
      <div className="flex-center-between mb-10 px-6">
        <div>
          <h1 className="heading text-4xl font-extrabold mb-2">
            The Best Packages in Albania
          </h1>
          <p className="mt-2 text-gray-500 text-xl dark:text-gray-300">
            Exquisite and stunning places to spend your holidays
          </p>
        </div>
        <div className="flex-align-center gap-x-4">
          <button
            className={`w-12 h-12 rounded-full grid place-items-center bg-white dark:bg-gray-800 shadow-lg border transition hover:bg-primary hover:text-white sm:cursor-pointer ${
              !isScroll && "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => scrollContainer("left")}
            disabled={!isScroll}
            aria-label="Scroll left"
          >
            <FiChevronLeft size={26} />
          </button>
          <button
            className="w-12 h-12 rounded-full grid place-items-center bg-white dark:bg-gray-800 shadow-lg border transition hover:bg-primary hover:text-white sm:cursor-pointer"
            onClick={() => scrollContainer("right")}
            aria-label="Scroll right"
          >
            <FiChevronRight size={26} />
          </button>
        </div>
      </div>
      <div
        className="flex-align-center gap-x-10 overflow-x-auto hide-scrollbar scroll-smooth px-6 py-4"
        ref={exploreContainer}
      >
        {packagesData.map((packet) => (
          <Link
            to={`/packets/${packet.id}`}
            key={packet.id}
            className="min-w-[340px] max-w-sm"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-primary group flex flex-col h-full">
              <div className="relative">
                <img
                  src={packet.images[0]}
                  alt={packet.title}
                  className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-200"
                />
                <span className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 rounded-full px-4 py-1.5 text-base font-bold text-primary shadow-lg">
                  €{packet.price}
                </span>
              </div>
              <div className="flex items-center gap-x-2 mt-4">
                <FaStar className="text-secondaryYellow" />
                <p className="font-semibold text-gray-700 dark:text-gray-200 text-lg">
                  {packet.rating}
                </p>
                <span className="ml-auto text-sm text-gray-400 dark:text-gray-400">
                  {packet.location}
                </span>
              </div>
              <h2 className="text-xl font-bold mt-3  group-hover:text-secondary transition dark:text-secondary">
                {packet.title}
              </h2>
              <div className="flex mt-4 justify-end">
                <span className="inline-block text-sm font-semibold text-blue-700 bg-blue-100 dark:bg-blue-600 dark:text-white rounded-full px-5 py-2 shadow group-hover:bg-blue-700 group-hover:text-white transition-all duration-150">
                  Click for more details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;

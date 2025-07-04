/* eslint-disable jsx-a11y/anchor-is-valid */

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiStore } from "../../features/uiSlice";

const Footer = () => {
  const { mode } = useSelector(uiStore);
  return (
    <div className="px-[2%] md:px-[6%] mt-20 z-0">
      <footer>
        <div className="flex flex-wrap gap-8 md:gap-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-lg py-10 px-4 md:px-10">
          <div className="flex-1 basis-[12rem]">
            <Link to="/">
              <img
                src={
                  mode === "dark"
                    ? `${process.env.PUBLIC_URL}/2-rb.png`
                    : `${process.env.PUBLIC_URL}/logo-light-bg.png`
                }
                alt="logo"
                className="w-32 mb-3"
              />
            </Link>
            <p className="text-sm text-muted">
              Discover your next adventure with Illyrian Trails. Explore, book,
              and travel with ease.
            </p>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold mb-2 text-primary">
              Services
            </h2>
            <ul>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/city-guide">Travel Booking</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/speedboat">Speed Boat Tours</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/cars">Car Booking</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/houses">Stays</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/fishing-guide">Fishing Guide</Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold mb-2 text-primary">Support</h2>
            <ul>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/#">Legal</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/#">Terms & Conditions</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/#">Account</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/#">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold mb-2 text-primary">
              Business
            </h2>
            <ul>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/#">Success</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/about">About Illyrian Trails</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/#">Blog</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/about">Information</Link>
              </li>
              <li className="my-2 text-muted hover:text-primary transition">
                <Link to="/city-guide">Travel Guide</Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[14rem] text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2 text-primary">
              Subscribe to our Newsletter
            </h2>
            <p className="text-muted text-sm mb-3">
              Be the first to know about updates and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-2 mb-5">
              <input
                type="email"
                className="px-4 py-2 w-full sm:w-auto flex-1 card-bordered dark:shadow-none outline-none rounded-lg dark:bg-card-dark border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary transition"
                placeholder="Email Address..."
              />
              <button
                type="submit"
                className="btn btn-primary px-6 py-2 rounded-lg shadow-md hover:scale-105 transition"
              >
                Subscribe
              </button>
            </form>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Link
                to="/#"
                className="text-xl text-muted hover:text-primary transition"
              >
                <FiFacebook />
              </Link>
              <Link
                to="/#"
                className="text-xl text-muted hover:text-primary transition"
              >
                <FaTwitter />
              </Link>
              <Link
                to="https://www.instagram.com/illyrian.trails/"
                className="text-xl text-muted hover:text-primary transition"
              >
                <FaInstagram />
              </Link>
              <Link
                to="/#"
                className="text-xl text-muted hover:text-primary transition"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-muted mt-6 py-3 border-t dark:border-dark">
        <p>
          Created By{" "}
          <a
            href="https://www.instagram.com/aura.brand.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            AuraBrand Studio
          </a>{" "}
          | All Rights Reserved. &copy;{new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;

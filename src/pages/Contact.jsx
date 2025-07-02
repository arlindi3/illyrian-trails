import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full h-64 md:h-80 bg-blue-900 dark:bg-blue-950 flex items-center justify-center relative">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Contact Our Tour Guide
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg mx-auto my-10 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-colors duration-300">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://wa.me/355692311606"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition flex items-center gap-2"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-8 h-8" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/illyrian.trails/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300 transition flex items-center gap-2"
              aria-label="Instagram"
            >
              <FaInstagram className="w-8 h-8" />
              Instagram
            </a>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition flex items-center gap-2"
              aria-label="Facebook"
            >
              <FaFacebook className="w-8 h-8" />
              Facebook
            </a>
          </div>
          {submitted ? (
            <div className="text-green-700 dark:text-green-400 text-center font-semibold py-8">
              Thank you for reaching out! We will get back to you soon.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700 dark:text-gray-200"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-700 dark:text-gray-200"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-medium text-gray-700 dark:text-gray-200"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700 dark:text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 resize-vertical"
                  placeholder="How can we help you? Let us know your travel plans or questions."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

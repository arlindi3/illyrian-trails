import React from "react";

const features = [
  "Curated hiking and biking trails with detailed maps",
  "Offline access for remote adventures",
  "Local tips, historical facts, and cultural highlights",
  "User reviews and trail difficulty ratings",
  "Personalized trip planning and favorites",
];

const About = () => (
  <main className="w-full min-h-screen mx-auto my-0 p-8 bg-white rounded-none shadow-none font-sans text-gray-800">
    <h1 className="text-4xl font-bold mb-6 text-center tracking-wide drop-shadow-lg">
      About Ilyrian Trails
    </h1>
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      alt="Ilyrian landscape"
      className="w-full rounded-xl my-10 shadow-lg object-cover max-h-[350px]"
    />
    <section className="mb-8">
      <h2 className="text-2xl text-green-700 mb-3 pl-3 border-l-4 border-green-300 font-semibold">
        Discover the Hidden Gems of the Albanians
      </h2>
      <p className="leading-relaxed text-lg">
        <strong>Ilyrian Trails Guide</strong> is your ultimate companion for
        exploring the breathtaking landscapes, ancient paths, and vibrant
        cultures of the Western Balkans. Whether you’re a seasoned hiker, a
        history enthusiast, or a curious traveler, our Guide helps you uncover
        the best trails, local insights, and authentic experiences.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl text-green-700 mb-3 pl-3 border-l-4 border-green-300 font-semibold">
        Features
      </h2>
      <ul className="space-y-3 text-base">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1 text-green-600">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#81c784" />
                <path
                  d="M8 12.5l2.5 2.5 5-5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

export default About;

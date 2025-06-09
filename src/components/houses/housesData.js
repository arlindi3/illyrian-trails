// /houses/data.js
export const houses = [
  {
    id: "house-1",
    title: "House in Volga Durrës",
    location: "Durrës, Albania",
    rating: 4.5,
    reviews: 120,
    price: "€80 per night",
    images: [
      `${process.env.PUBLIC_URL}/images/house.jpg`,
      `${process.env.PUBLIC_URL}/images/house2.jpg`,
      `${process.env.PUBLIC_URL}/images/house3.jpg`,
      `${process.env.PUBLIC_URL}/images/house4.jpg`,
    ],
    description:
      "Escape to this peaceful and cozy house nestled near the lush forests of Durrës. Perfect for families or couples, this home offers modern amenities, a fully equipped kitchen, and a private parking space. Enjoy relaxing evenings on the terrace or explore the nearby beaches and local attractions.",
    features: ["WiFi", "Air Conditioning", "Kitchen", "Private Parking"],
    amenities: ["TV", "Shower", "Towels", "Coffee Machine"],
  },
  {
    id: "house-2",
    title: "House in Plazh Durrës",
    location: "Durrës, Plazh",
    rating: 4.5,
    reviews: 120,
    price: "€100 per night",
    images: [
      `${process.env.PUBLIC_URL}/images/house-plazh.jpg`,
      `${process.env.PUBLIC_URL}/images/house-plazh2.jpg`,
      `${process.env.PUBLIC_URL}/images/house-plazh3.jpg`,
      `${process.env.PUBLIC_URL}/images/house-plazh4.jpg`,
    ],
    description:
      "Experience the best of Durrës at this stylish beachside house, just steps from the sandy shores of Plazh. Featuring spacious interiors, modern comforts, and a private balcony with sea views, this property is ideal for a relaxing getaway. Enjoy easy access to restaurants, cafes, and vibrant nightlife.",
    features: ["WiFi", "Air Conditioning", "Kitchen", "Private Parking"],
    amenities: ["TV", "Shower", "Towels", "Coffee Machine"],
  },
];

// /houses/data.js
export const houses = [
  {
    id: "house-1",
    title: "House in Plazh Durrës",
    location: "Durrës, Albania",
    rating: 4.5,
    reviews: 120,
    price: "€80 natën",
    images: [
      `${process.env.PUBLIC_URL}/images/hotel (1).jpg`,
      `${process.env.PUBLIC_URL}/images/hotel (2).jpg`,
      `${process.env.PUBLIC_URL}/images/hotel (3).jpg`,
      `${process.env.PUBLIC_URL}/images/hotel (4).jpg`,
    ],
    description: "Një shtëpi shumë e qetë dhe e rehatshme afër pyllit...",
    features: ["WiFi", "Air Conditioning", "Kitchen", "Private Parking"],
    amenities: ["TV", "Shower", "Towels", "Coffee Machine"],
  },
  {
    id: "house-2",
    title: "House in Volga",
    location: "Durrës, Currila",
    rating: 4.5,
    reviews: 120,
    price: "€100 natën",
    images: [
      `${process.env.PUBLIC_URL}/images/hotel (5).jpg`,
      `${process.env.PUBLIC_URL}/images/hotel (6).jpg`,
      `${process.env.PUBLIC_URL}/images/hotel (7).jpg`,
      `${process.env.PUBLIC_URL}/images/hotel (8).jpg`,
    ],
    description: "Një shtëpi shumë e qetë dhe e rehatshme afër pyllit...",
    features: ["WiFi", "Air Conditioning", "Kitchen", "Private Parking"],
    amenities: ["TV", "Shower", "Towels", "Coffee Machine"],
  },
];

// src/components/CarRental/carData.js

export const cars = [
  {
    id: 1,
    name: "Volkswagen Golf 7",
    pricePerDay: 45,
    image: `${process.env.PUBLIC_URL}/images/golf7.jpg`,
    seats: 5,
    gear: "Automatic",
    fuel: "Diesel",
    year: 2019,
  },
  {
    id: 2,
    name: "Toyota Yaris Hybrid",
    pricePerDay: 35,
    image: `${process.env.PUBLIC_URL}/images/yaris.jpg`,
    seats: 5,
    gear: "Automatic",
    fuel: "Hybrid",
    year: 2020,
  },
  {
    id: 3,
    name: "Fiat Panda",
    pricePerDay: 30,
    image: `${process.env.PUBLIC_URL}/images/panda.jpg`,
    seats: 4,
    gear: "Manual",
    fuel: "Petrol",
    year: 2018,
  },
  {
    id: 4,
    name: "Audi Q8",
    pricePerDay: 50,
    image: `${process.env.PUBLIC_URL}/images/audiq8.jpg`,
    seats: 4,
    gear: "Automatic",
    fuel: "Petrol",
    year: 2022,
  },
];

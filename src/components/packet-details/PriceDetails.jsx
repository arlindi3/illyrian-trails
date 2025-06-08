import { Link } from "react-router-dom";
import { useState } from "react";

const defaultFeatures = [
  { id: "pets", label: "Allow to bring pets", price: 10, checked: false },
  {
    id: "breakfast",
    label: "Breakfast a day per person",
    price: 23,
    checked: true,
  },
  { id: "parking", label: "Parking a day", price: 5, checked: false },
  { id: "pillow", label: "Extra pillow", price: 10, checked: false },
];

const PriceDetails = ({
  basePrice = 182,
  discount = 20,
  nights = 1,
  serviceFee = 5,
  features = defaultFeatures,
  guestsOptions = [
    "1 Adult",
    "2 Adult",
    "3 Adult",
    "1 Adult, 1 Child",
    "2 Adult, 1 Child",
    "3 Adult, 1 Child",
  ],
  hotelId = 1,
}) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(guestsOptions[0]);
  const [selectedFeatures, setSelectedFeatures] = useState(
    features.reduce((acc, f) => ({ ...acc, [f.id]: f.checked }), {})
  );

  const discountedPrice = basePrice - (basePrice * discount) / 100;
  const featuresTotal = features.reduce(
    (sum, f) => (selectedFeatures[f.id] ? sum + f.price : sum),
    0
  );
  const total = discountedPrice * nights + featuresTotal + serviceFee;

  const handleFeatureChange = (id) => {
    setSelectedFeatures((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="rounded-lg bg-white border dark:bg-card-dark dark:border-dark p-4">
      <div className="flex-center-between pb-2 border-b dark:border-b-dark">
        <h1>
          <span className="text-4xl md:text-5xl font-bold">
            ${discountedPrice}
          </span>{" "}
          <span className="opacity-80 text-sm">/night</span>{" "}
          <span className="line-through opacity-80 text-sm">${basePrice}</span>
        </h1>
        <div className="flex-shrink-0">
          <span className="px-1 py-[2px] text-sm text-white bg-primary rounded-full">
            {discount}% OFF
          </span>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div>
          <p>Check-In</p>
          <input
            type="date"
            className="border-none outline-none rounded-md bg-slate-100 dark:bg-hover-color-dark px-3 py-1 w-full"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div>
          <p>Check-Out</p>
          <input
            type="date"
            className="border-none  outline-none rounded-md bg-slate-100 dark:bg-hover-color-dark px-3 py-1 w-full"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-3">
        <p>Guest</p>
        <select
          className="border-none outline-none w-full rounded-md bg-slate-100 dark:bg-hover-color-dark px-3 py-2"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        >
          {guestsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <h1 className="font-semibold">Extra Features</h1>
        <div className="mt-2">
          {features.map((f) => (
            <div className="flex-center-between mt-2" key={f.id}>
              <div className="input-check">
                <input
                  type="checkbox"
                  id={f.id}
                  checked={!!selectedFeatures[f.id]}
                  onChange={() => handleFeatureChange(f.id)}
                />
                <label htmlFor={f.id}>{f.label}</label>
              </div>
              <p>${f.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <h1 className="font-semibold">Price</h1>
        <div className="rounded-lg p-3 bg-slate-100 dark:bg-hover-color-dark">
          <div className="flex-center-between">
            <h1>
              {nights} Night{nights > 1 ? "s" : ""}
            </h1>
            <p>${basePrice * nights}</p>
          </div>
          <div className="flex-center-between mt-2">
            <h1>Discount {discount}%</h1>
            <p>-${(basePrice * discount * nights) / 100}</p>
          </div>
          {features
            .filter((f) => selectedFeatures[f.id])
            .map((f) => (
              <div className="flex-center-between mt-2" key={f.id + "-summary"}>
                <h1>{f.label}</h1>
                <p>${f.price}</p>
              </div>
            ))}
          <div className="flex-center-between mt-2">
            <h1>Service fee</h1>
            <p>${serviceFee}</p>
          </div>
        </div>
        <div className="flex-center-between mt-5">
          <h1>Total Payment</h1>
          <h1 className="text-xl font-bold">${total}</h1>
        </div>
        <Link
          to={`/hotels/${hotelId}/confirm-booking`}
          className="btn btn-primary block text-center w-full mt-4 !opacity-100"
        >
          book now
        </Link>
      </div>
    </div>
  );
};

export default PriceDetails;

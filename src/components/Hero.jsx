import React, { useState } from "react";
import hotelsData from "../data/hotels"; // hotels.js theke data
import HotelList from "./HotelList";

function Hero() {
  const [hotels, setHotels] = useState([]);
  const [location, setLocation] = useState("Dubai");
  const [budget, setBudget] = useState("3,000 - 5,000");

const handleSearch = () => {
  let min = 0;
  let max = Infinity;

  if (budget.includes("-")) {
    const [low, high] = budget.split("-").map(v => v.replace(/,/g, "").trim());
    min = parseInt(low, 10);
    max = parseInt(high, 10);
  } else if (budget.includes("+")) {
    min = parseInt(budget.replace(/[,+]/g, ""), 10);
    max = Infinity;
  }

  const filtered = hotelsData.filter((hotel) => {
    const price = typeof hotel.price === "string"
      ? parseInt(hotel.price.replace(/,/g, "").trim(), 10)
      : hotel.price;

    return hotel.location === location && price >= min && price <= max;
  });

  console.log("Filtered hotels:", filtered);
  setHotels(filtered);
};


  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Discover Top Hotels, Compare Deals, and Book Your Perfect Stay</h1>
        <p>Search trusted hotels for unforgettable stays and hassle-free booking.</p>

        <div className="search-bar">
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option>Dubai</option>
            <option>NYC</option>
            <option>London</option>
          </select>

          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option>300$ - 500$</option>
            <option>500$ - 1,000$</option>
            <option>1,000+$</option>
          </select>

          <button onClick={handleSearch}>Search Hotel</button>
        </div>
      </div>

      <HotelList hotels={hotels} />
    </section>
  );
}

export default Hero;

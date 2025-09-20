import React from "react";
import "./css/Hero_HotelList.css"



export default function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <h2>{hotel.name}</h2>
      <p>City: {hotel.city}</p>
      <p>Type: {hotel.type}</p>
      <p>Price: {hotel.price} USD/night</p>
      <p>Rooms Available: {hotel.roomsAvailable}</p>
      <p>Facilities: {hotel.facilities.join(", ")}</p>
      <a href={hotel.bookingLink} target="_blank" rel="noopener noreferrer">
        Book Now
      </a>
    </div>
  );
}

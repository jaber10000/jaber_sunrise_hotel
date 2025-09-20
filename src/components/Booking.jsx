import React from "react";
import "./css/Booking.css";
import hotels from "../data/hotels"; // adjust path if needed

export default function Booking() {
  const availableHotels = hotels.filter(hotel => hotel.availableRooms > 0);

  const handleBooking = (hotel) => {
    alert(`Booking initiated for ${hotel.name}!`);
    // Later, you can replace this with real booking logic
  };

  return (
    <section className="booking">
      <h2 className="booking-title">✨ Room Booking</h2>
      <p className="booking-subtitle">Choose your perfect stay with luxury comfort.</p>

      <div className="booking-chart">
  <div className="chart-header">
    <span>Hotel Name</span>
    <span>View</span>
    <span>Price</span>
    <span>Available Rooms</span>
    <span>Action</span>
  </div>

  {availableHotels.map((hotel) => (
    <div key={hotel.id} className="chart-row">
      <span>{hotel.name}</span>
      <span>{hotel.view}</span>
      <span>${hotel.price}</span>
      <span>{hotel.availableRooms}</span>
      {/* Move button to its own span for proper alignment */}
      <span className="action-column">
        <button
          className="book-now"
          onClick={() => handleBooking(hotel)}
        >
          Book Now
        </button>
      </span>
    </div>
  ))}
</div>
    </section>
  );
}

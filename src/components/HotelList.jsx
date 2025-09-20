import React from "react";

function HotelList({ hotels }) {
  if (!hotels.length) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}></p>;
  }

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <h3>{hotel.name}</h3>
          <p><strong>Location:</strong> {hotel.location}</p>
          <p><strong>Price:</strong> {hotel.price} USD</p>
          <p><strong>View:</strong> {hotel.view}</p>
          <p><strong>Available Rooms:</strong> {hotel.availableRooms}</p>
          <p><strong>Facilities:</strong> {hotel.facilities.join(", ")}</p>
          <button className="book-btn">Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default HotelList;

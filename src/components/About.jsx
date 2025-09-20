import React, { useState } from "react";
import Card from "./Card";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./css/About.css";

const cardData = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "A versatile platform offering a wide range of hotel options and services",
    location: "Los Angeles, United States",
    cost: "$250 / night",
    details: "Enjoy premium comfort with scenic views, rooftop dining, and luxury interiors."
  },
  {
    image: "https://res.cloudinary.com/traveltripperweb/image/upload/c_crop,h_3742,w_4467,x_629,y_0/c_fit,f_auto,h_992,q_auto,w_992/v1656435013/qnx1z6gr4nvsngrarlp7.jpg",
    title: "Explore the perfect destination for comfort, relaxation, and luxury",
    location: "NYC, United States",
    cost: "$280 / night",
    details: "Modern architecture, spa services, and a fine-dining experience curated by world-class chefs."
  },
  {
    image: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3aa1740-5223-4b81-b83d-882bcbedc407.jpg?crop=1600%2C900%2C0%2C0&format=webp&quality=9&resize=1200",
    title: "Explore the perfect destination for comfort, relaxation, and luxury",
    location: "Dubai, United Arab Emirates",
    cost: "$300 / night",
    details: "Luxury hotel with infinity pool, desert safari tours, and premium hospitality."
  },
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/best-hotels-in-dubai-1634849657.jpeg?crop=0.670xw:1.00xh;0.00321xw,0&resize=980:*",
    title: "Explore the perfect destination for comfort, relaxation, and luxury",
    location: "Dubai, United Arab Emirates",
    cost: "$320 / night",
    details: "Exclusive penthouses, private beach access, and luxury spa for relaxation."
  },
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/best-luxury-hotels-in-london-1-67d18df031646.jpg?crop=0.670xw:1.00xh;0.159xw,0&resize=980:*",
    title: "Explore the perfect destination for comfort, relaxation, and luxury",
    location: "London, England",
    cost: "$270 / night",
    details: "Classic British luxury with modern comfort, tea lounges, and riverside views."
  }
];

function About() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section className="about">
      <h2>Explore Stays, About Comfort, Your Stay, Our Priority</h2>
      <p>
        Sunrise is a trusted platform connecting travelers with top hotels across
        the country.
      </p>

      <div className="cards">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedCard(card)}
          >
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>
              <FaMapMarkerAlt className="location-icon" /> {card.location}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              &times;
            </button>
            <img src={selectedCard.image} alt={selectedCard.title} />
            <h2>{selectedCard.title}</h2>
            <p><FaMapMarkerAlt className="location-icon" /> {selectedCard.location}</p>
            <p className="cost">💲 {selectedCard.cost}</p>
            <p className="details">{selectedCard.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;

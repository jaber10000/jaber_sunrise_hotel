import React, { useState } from "react";
import "./css/HotelService.css";
import { style } from "framer-motion/client";

const servicesData = [
  {
    id: 1,
    title: "Luxury Rooms",
    description: "Spacious, elegant, and designed with modern interiors. Enjoy breathtaking views and premium comfort.",
    images : [
      "https://cdn.home-designing.com/wp-content/uploads/2018/10/luxury-bedroom-arched-interior-1024x1365.jpg",
      
      "https://cdn.home-designing.com/wp-content/uploads/2018/10/luxury-king-bedroom-sets-1024x1241.jpg",

      "https://cdn.home-designing.com/wp-content/uploads/2018/10/luxury-white-bedroom-decor-1024x768.jpg",

      "https://cdn.home-designing.com/wp-content/uploads/2018/10/sage-Green-Luxury-Bedroom-1024x1280.jpg",

      "https://cdn.home-designing.com/wp-content/uploads/2018/10/luxury-ensuite-bathroom-1024x743.jpg",
    ],
    facilities: ["King-size bed", "Sea view", "Smart TV", "Mini bar", "Jacuzzi"],
  },
  {
    id: 2,
    title: "Fine Dining",
    description: "Multi-cuisine restaurant with 5-star chefs serving world-class dishes & curated wine collections.",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/09/c6/bc/aqua-deck-restaurant.jpg?w=1000&h=600&s=1",

      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ba/f3/1d/spacious-and-comfortable.jpg?w=1000&h=600&s=1",

      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/5c/4d/33/prego.jpg?w=1000&h=-1&s=1",

      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/63/b5/d9/caption.jpg?w=1000&h=600&s=1",
    ],
    facilities: ["Multi-cuisine menu", "Wine collection", "Private dining", "Outdoor seating"],
  },
  {
    id: 3,
    title: "Spa & Wellness",
    description: "Relax at our spa with rejuvenating therapies, yoga sessions, and wellness treatments.",
    images: [
      "https://gulshanrose.com/wp-content/uploads/2025/05/Gulshan-Best-Spa-Centers-That-Feel-Luxurious-1024x576.webp",

      "https://www.gulshanrelaxspa.com/wp-content/uploads/2025/04/top-1024x768.jpg",


    ],
    facilities: ["Massage", "Sauna", "Yoga classes", "Meditation room"],
  },
  {
    id: 4,
    title: "Infinity Pool",
    description: "Dive into luxury with our rooftop infinity pool offering city skyline views and cocktail service.",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/533171563.jpg?k=2bfc258bb40a389e33381e66e95be70da722e4bcde8b0cc48dec726f25ccabe4&o=",
      
      "https://www.journeyera.com/wp-content/uploads/2020/01/where-to-stay-in-hong-kong-6-1024x630.jpg",

      "https://www.journeyera.com/wp-content/uploads/2020/02/luxury-hotels-hong-kong-5-star-158042884-768x575.jpg",

      "https://www.journeyera.com/wp-content/uploads/2020/02/luxury-hotels-hong-kong-5-star-161369188-2-768x482.jpg",
    ],
    facilities: ["Rooftop view", "Pool bar", "Sun loungers", "Night swimming"],
  },
];

export default function HotelService() {
  const [selectedService, setSelectedService] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openService = (service) => {
    setSelectedService(service);
    setCurrentImage(0);
  };

  const closeService = () => setSelectedService(null);

  const nextImage = () => {
    if (!selectedService) return;
    setCurrentImage((prev) => (prev + 1) % selectedService.images.length);
  };

  const prevImage = () => {
    if (!selectedService) return;
    setCurrentImage((prev) =>
      prev === 0 ? selectedService.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="hotel">
      <div className="hotel-header">
        <h1>✨ Sunrise ✨</h1>
        <p>
          Experience world-class luxury and comfort where every detail is
          designed for your delight. From fine dining to serene relaxation, your
          perfect getaway awaits.
        </p>
      </div>

      <div className="services">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="card"
            onClick={() => openService(service)}
          >
            <img src={service.images[0]} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description.slice(0, 80)}...</p>
          </div>
        ))}
      </div>

      {/* Modal / Expanded Section */}
      {selectedService && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeService}>
              &times;
            </button>

            <h2>{selectedService.title}</h2>
            <div className="carousel">
              <button className="prev" onClick={prevImage}>
                &#10094;
              </button>
              <img
                src={selectedService.images[currentImage]}
                alt={`${selectedService.title} ${currentImage + 1}`}
              />
              <button className="next" onClick={nextImage}>
                &#10095;
              </button>
            </div>

            <p>{selectedService.description}</p>
            <h4>Facilities:</h4>
            <ul>
              {selectedService.facilities.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
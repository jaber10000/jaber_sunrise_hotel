import React, { useState } from "react";
import { FaSwimmingPool, FaDumbbell, FaConciergeBell, FaSpa, FaUtensils, FaWifi } from "react-icons/fa";
import './css/Facilities.css';

const facilitiesData = [
  {
    id: 1,
    icon: <FaSwimmingPool />,
    title: "Infinity Pool",
    short: "Relax and unwind in our rooftop infinity pool.",
    details: `
Our rooftop infinity pool offers panoramic city views.
- Timings: 6AM - 10PM
- Rules: Swimwear required, no food/drinks in pool area
- Facilities: Towels, Poolside lounge, Safety lifeguards
    `,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/533171563.jpg?k=2bfc258bb40a389e33381e66e95be70da722e4bcde8b0cc48dec726f25ccabe4&o=",

      "https://www.journeyera.com/wp-content/uploads/2020/01/where-to-stay-in-hong-kong-6-1024x630.jpg",

      "https://www.journeyera.com/wp-content/uploads/2020/02/luxury-hotels-hong-kong-5-star-158042884-768x575.jpg"
    ]
  },
  {
    id: 2,
    icon: <FaDumbbell />,
    title: "Fitness Center",
    short: "Stay fit with our state-of-the-art gym.",
    details: `
Fully equipped gym open 24/7
- Personal trainers available
- Includes free weights, cardio machines, yoga mats
- Age: 16+
    `,
    images: [
      "https://d1qzuhxpc9cpmj.cloudfront.net/images/Gym20924a_copy.jpg",

      "https://www.vmhotel.com/wp-content/uploads/sites/282/2023/12/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20231230180941-1366x768.jpg"
    ]
  },
  {
    id: 3,
    icon: <FaConciergeBell />,
    title: "24/7 Concierge",
    short: "Dedicated team ensures personalized service anytime.",
    details: `
Concierge available around the clock
- Services: Room service, reservations, tour booking
- Languages: English, Spanish, French
    `,
    images: [
      
    ]
  },
  {
    id: 4,
    icon: <FaSpa />,
    title: "Spa & Wellness",
    short: "Luxury spa treatments to rejuvenate your body and mind.",
    details: `
Spa timings: 8AM - 9PM
- Services: Massage, Sauna, Yoga, Meditation
- Booking required for some treatments
    `,
    images: [
      "https://gulshanrose.com/wp-content/uploads/2025/05/Gulshan-Best-Spa-Centers-That-Feel-Luxurious-1024x576.webp",

      "https://www.gulshanrelaxspa.com/wp-content/uploads/2025/04/top-1024x768.jpg"
    ]
  },
  {
    id: 5,
    icon: <FaUtensils />,
    title: "Fine Dining",
    short: "Multi-cuisine dining prepared by world-class chefs.",
    details: `
Open 7AM - 11PM
- Cuisines: Italian, Japanese, Continental, Local
- Amenities: Private dining rooms, Outdoor terrace, Wine selection
    `,
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/09/c6/bc/aqua-deck-restaurant.jpg?w=1000&h=600&s=1",

      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ba/f3/1d/spacious-and-comfortable.jpg?w=1000&h=600&s=1",

      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/5c/4d/33/prego.jpg?w=1000&h=-1&s=1",
    ]
  },
  {
    id: 6,
    icon: <FaWifi />,
    title: "High-Speed Wi-Fi",
    short: "Stay connected with complimentary high-speed internet.",
    details: `
Wi-Fi available in rooms and public areas
- Free of charge
- Secure connection with password
    `,
    images: [
      "https://t3.ftcdn.net/jpg/02/32/28/88/240_F_232288812_vYcnEVF44sUEZMs1whv3doVvaeSlhhxT.jpg"
    ]
  }
];

export default function Facilities() {
  const [selected, setSelected] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openFacility = (facility) => {
    setSelected(facility);
    setCurrentImage(0);
  };

  const closeFacility = () => setSelected(null);

  const nextImage = () => {
    if (!selected || !selected.images.length) return;
    setCurrentImage((prev) => (prev + 1) % selected.images.length);
  };

  const prevImage = () => {
    if (!selected || !selected.images.length) return;
    setCurrentImage((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="facilities">
      <div className="facilities-header">
        <h2>Our Premium Facilities</h2>
        <p>Experience world-class comfort and luxury with top-notch facilities designed to make your stay unforgettable.</p>
      </div>

      <div className="facility-grid">
        {facilitiesData.map(f => (
          <div key={f.id} className="facility-card" onClick={() => openFacility(f)}>
            <div className="facility-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.short}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="facility-modal">
          <div className="facility-content">
            <button className="close-btn" onClick={closeFacility}>&times;</button>
            <h2>{selected.title}</h2>

            {selected.images.length > 0 && (
              <div className="carousel1">
                <button className="prev" onClick={prevImage}>&#10094;</button>
                <img src={selected.images[currentImage]} alt={selected.title} />
                <button className="next" onClick={nextImage}>&#10095;</button>
              </div>
            )}

            <pre className="facility-details">{selected.details}</pre>
          </div>
        </div>
      )}
    </section>
  );
}

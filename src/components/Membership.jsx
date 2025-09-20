import React from "react";
import { FaCrown, FaStar, FaGlassCheers, FaConciergeBell } from "react-icons/fa";
import { motion } from "framer-motion";
import './css/Membership.css'

function Membership() {
  const plans = [
    {
      title: "Silver Member",
      price: "$199 / Year",
      perks: ["Exclusive lounge access", "Priority check-in", "2 Free Spa Sessions"],
      icon: <FaStar />,
      color: "linear-gradient(135deg, #d7d2cc 0%, #304352 100%)",
    },
    {
      title: "Gold Member",
      price: "$399 / Year",
      perks: ["All Silver Perks", "Free Gym & Pool", "5 Free Spa Sessions", "Airport Pickup"],
      icon: <FaGlassCheers />,
      color: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    },
    {
      title: "Platinum Member",
      price: "$799 / Year",
      perks: [
        "All Gold Perks",
        "Unlimited Spa & Wellness",
        "VIP Suite Upgrade",
        "Private Concierge 24/7",
      ],
      icon: <FaCrown />,
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
  ];

  return (
    <section className="membership">
      <motion.h2 
        className="membership-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🌟 Exclusive Membership Plans
      </motion.h2>

      <motion.p 
        className="membership-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Unlock premium experiences & luxury benefits tailored for you.
      </motion.p>

      <div className="membership-cards">
        {plans.map((plan, index) => (
          <motion.div 
            key={index} 
            className="card"
            style={{ background: plan.color }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="icon">{plan.icon}</div>
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.perks.map((perk, i) => (
                <li key={i}>{perk}</li>
              ))}
            </ul>
            <button className="join-btn">Join Now</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Membership;

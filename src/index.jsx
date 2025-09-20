import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom"; // ✅ use Link instead of <a>

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="logo">🌅 Sunrise</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/facilities">Facilities</Link></li>
        <li><Link to="/membership">Membership</Link></li>
      </ul>

      <div className="nav-right">
        <Link href="#" className="app-link">Get App</Link>
        <button className="book-btn">
  <Link to="/booking" style={{ color: "inherit", textDecoration: "none" }}>
    Book Now
  </Link>
</button>
      </div>

    </nav>
    
  );
  
}

<footer className="footer" style={{color:"black", margin:0, padding: 0}}>Made By Jaber</footer>
export default Navbar;

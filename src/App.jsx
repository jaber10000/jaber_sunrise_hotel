import Navbar from "./index";
import Hero from "./components/Hero";
import About from "./components/About";
import HotelService from "./components/HotelService";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Facilities from "./components/Facilities";
import Membership from "./components/Membership";
import Booking from "./components/Booking";



function App() {
  return (
    <div className="app">
      <Navbar />
      <marquee direction="right" style={{color:"black"}}
        >This website is now under construction</marquee> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<HotelService />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/membership" element={<Membership />} />


        <Route path="/booking" element={<Booking />} />
        {/* Add more routes here */}
      </Routes>
      
    </div>
  );
  
}

export default App;

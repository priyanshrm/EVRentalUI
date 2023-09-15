import React from "react";
import "./About.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <div className="about-us-content">
        <p>
        Welcome to Shell's EV Rental, your trusted destination for convenient, eco-friendly, and exhilarating electric vehicle rentals. We're on a mission to drive the future forward, one electric mile at a time.</p>
        <h3>Why choose us?</h3>
        <p>
        <ul>
                <li><b>Diverse EV Fleet:</b> Whether you're looking for a compact electric car for a quick city escape or a spacious electric SUV for a family road trip, we've got you covered. Our carefully curated fleet showcases the latest EV models, ensuring you have the perfect ride for every occasion. </li>
                <li><b>Seamless Booking:</b> Booking an EV with us is as easy as a few clicks. Our user-friendly website and mobile app make the reservation process a breeze. You can even choose your preferred pickup location and drop-off time, giving you maximum flexibilty.</li>
                <li><b>Eco-conscious Commitment:</b> We're dedicated to reducing our carbon footprint and promoting sustainable transportation. All our EVs are powered by clean energy sources, and we're continuously working to make our operations even more eco-friendly.</li>
                <li><b>Affordable Pricing:</b> Going green doesn't mean breaking the bank. We offer competitive pricing and a range of rental options to fit your budget.</li>
                <li><b>Exceptional Service:</b> Our team is here to make your EV rental experience exceptional.</li>
            </ul>
        </p>
        
      </div>
    </div>
  );
}

export default AboutUs;

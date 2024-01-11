// Minilent.js
import React from 'react';
import { FaCar, FaCalendarAlt, FaPalette, FaCogs } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import './Carlent.css';

const Minilent = () => {
  return (
    <div className="car-details-container">
      <div className="carousel">
        {/* Add your carousel code here */}
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/mini cooper.jpg" className="d-block w-100" alt="Car 1" />
            </div>
            <div className="carousel-item">
              <img src="/mini 1.jpg" className="d-block w-100" alt="Car 2" />
            </div>
            <div className="carousel-item">
              <img src="mini 2.jpg" className="d-block w-100" alt="Car 3" />
            </div>
            {/* Add more carousel items as needed */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="car-details">
        <h2 className="car-title">Mini Copper S</h2>
        <p className="car-description">
        Drive in Style. Mini, Mighty, Unforgettable, Book now to experience the thrill of driving these exceptional vehicles.
        </p>
        <ul className="car-features">
          <li><FaCar /> Model:CONVERTIBLE</li>
          <li><FaCalendarAlt /> Year: 2018</li>
          <li><FaPalette /> Color: Red</li>
          <li><FaCogs /> Engine: V8 Turbocharged</li>
        </ul>
        <div className="rental-info">
          <h3>Rental Information</h3>
          <p>Contact us for rental rates and availability.</p>
          <p>+919447187403</p>
        </div>
        <div className="rent-button-container">
          <a href="#" className="btn btn-primary">Rent Now <FaArrowRight /></a>
        </div>
      </div>
    </div>
  );
}

export default Minilent;

import React from "react";
import "./Sidebar.css";
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <section>
      <nav class="navbar">
        <div className="navbar-container">

          <div className="item-list">
            <ul className="menu">
              <li className="navbar-item">
                <a href="/userdashboard/:id" class="menu-btn active">
                Dashboard
                </a>
              </li>
              <li className="navbar-item">
                <a href="/myaccount" class="menu-btn">
                Profile
                </a>
              </li>
              <li className="navbar-item">
                <a href="/Slotselection" class="menu-btn">
                Bookings
                </a>
              </li>
              <li className="navbar-item">
                <a href="/mybooking" class="menu-btn">
                My Bookings
                </a>
              </li>
              <li className="navbar-item">
                <a href="/vehicledetails" class="menu-btn">
                Vehicle Details
                </a>
              </li>
              <li className="navbar-item">
                <a href="/about" class="menu-btn">
                About Us
                </a>
              </li>
              <li className="navbar-item">
                <a href="/supoort" class="menu-btn">
                Support
                </a>
              </li>
              <li className="navbar-item">
                <a href="/rating" class="menu-btn">
                Review & Rating
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
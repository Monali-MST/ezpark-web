import React from "react";
import "./Sidebar.css";


const NavBar = () => {
  return (
    <section>
      <nav className="navbar">
        <div className="navbar-container">

          <div className="item-list">
            <ul className="menu">
              <li className="navbar-item">
                <a href="/userdashboard/:id" className="menu-btn active">
                Dashboard
                </a>
              </li>
              <li className="navbar-item">
                <a href="/myaccount" className="menu-btn">
                Profile
                </a>
              </li>
              <li className="navbar-item">
                <a href="/Slotselection" className="menu-btn">
                Bookings
                </a>
              </li>
              <li className="navbar-item">
                <a href="/mybooking" className="menu-btn">
                My Bookings
                </a>
              </li>
              <li className="navbar-item">
                <a href="/vehicledetails" className="menu-btn">
                Vehicle Details
                </a>
              </li>
              <li className="navbar-item">
                <a href="/about" className="menu-btn">
                About Us
                </a>
              </li>
              <li className="navbar-item">
                <a href="/supoort" className="menu-btn">
                Support
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
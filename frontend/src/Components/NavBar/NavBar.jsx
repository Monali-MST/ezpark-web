import React from "react";
import Logo from "../../Assets/logo_without_text.png";
import "./NavBar.css";

const Navbar = () => {
  return (
    <section>
      <nav class="navbar">
        <div className="navbar-container">
          <div className="logo-section">
            <div className="logo-img">
              <img className="logo" src={Logo} />
            </div>
            <div className="logo-name">
              <span className="yell">EZ </span>
              <span className="blk">Park</span>
            </div>
          </div>

          <div className="item-list">
            <ul className="menu">
              <li className="navbar-item">
                <a href="#" class="menu-btn active">
                  CONTACT US
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" class="menu-btn">
                  SUPPORT
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" class="menu-btn">
                  BOOKING
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" class="menu-btn">
                  MY ACCOUNT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

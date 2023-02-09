import React from "react";
import Logo from "../../Assets/logo_without_text.png";
import "./NavBarAdmin.css";

export default function SlotsAdmin() {
  return (
   
      <div className="box">
        <div>
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
                      Manual Booking
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#" class="menu-btn">
                      User Management
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#" class="menu-btn">
                      Slot Management
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#" class="menu-btn">
                      Refund Requests
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#" class="menu-btn">
                      Set Values
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#" class="menu-btn">
                      Chat
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#" class="menu-btn">
                      My account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="box-2"></div>
      </div>
  );
}

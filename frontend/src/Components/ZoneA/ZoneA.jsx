import React from "react";
import Logo from "../../Assets/logo_without_text.png";
import "./ZoneA.css";

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
              <ul className="menu"></ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="container">
        <p>Zone-A</p>
        <ul>         
            <div className="devide-1">
            
          <li><div className="slot"></div></li>
           
            </div>

            <div class="form-control">

            </div>
        </ul>
      </div>
    </div>
  );
}

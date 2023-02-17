import React from "react";
import Logo from "../../Assets/logo_without_text.png";
import "./ZoneD.css";

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
        <h2>Zone-A</h2>
        <div id="outer-box">
          <div className="devide">
            <div class="inner-box"></div>
            <div class="inner-box"></div>
            <div class="inner-box"></div>
            <div class="inner-box"></div>
            <div class="inner-box"></div>
          </div>
          <div class="arrow">
  <div class="line"></div>
  <div class="point"></div>
</div>
          <br></br>
          <br></br>
          <div className="devide">
            <div class="inner-box"></div>
            <div class="inner-box"></div>
            <div class="inner-box"></div>
            <div class="inner-box"></div>
            <div class="inner-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

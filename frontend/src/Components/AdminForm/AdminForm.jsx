import React from "react";
import Logo from "../../Assets/logo_without_text.png";
import "./AdminForm.css";

export default function SlotsAdmin() {
  return (
    <div>
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
      <div class="wrapper">
    <div class="title">
      ADD MEMBER
    </div>
    <div class="form">
       <div class="inputfield">
          <label>First Name</label>
          <input type="text" class="input"/>
       </div>  
        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" class="input"/>
       </div>   
        <div class="inputfield">
          <label>Gender</label>
          <div class="custom_select">
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
       </div> 
        <div class="inputfield">
          <label>Email Address</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield">
          <label>Phone Number</label>
          <input type="text" class="input"/>
       </div> 
       <div class="inputfield">
        <label>Address</label>
        <textarea class="textarea"></textarea>
       </div>
       <div class="inputfield">
          <label>Password</label>
          <input type="password" class="input"/>
       </div>  
      <div class="inputfield">
          <label>Confirm Password</label>
          <input type="password" class="input"/>
       </div>
      <div class="inputfield">
        <input type="submit" value="submit" class="btn"/>
      </div>
    </div>
</div>
      </div>
  );
}

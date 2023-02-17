import React from "react";
import "./NavBarAdmin.css";

export default function NavBarAdmin() {
  return (
    <div>
      <div class="wrapper">
        <div class="sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li>
              <a href="#">
                <i class="fas fa-home"></i>Manual Booking
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-user"></i>User Management
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-address-card"></i>Slot Management
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-project-diagram"></i>Refund Requests
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-blog"></i>Set Values
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-address-book"></i>Chat
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-map-pin"></i>My account
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

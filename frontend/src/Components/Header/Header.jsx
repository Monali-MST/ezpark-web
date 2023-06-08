import React from 'react';
import Logo from "../../Assets/logo_without_text.png";
import './Header.css';

export default function Header() {
  return (
    
      <header>
      <div className="logo-section">
        <div className="logo-img">
          <img className="logo" src={Logo} alt="logo"/>
        </div>
        <div className="logo-name">
          <span className="yell">EZ </span>
          <span className="blk">Park</span>
        </div>
      </div>
   
    </header>
  )
}

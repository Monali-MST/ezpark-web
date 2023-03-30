import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Assets/logo_without_text.png";
import "../NavBar/NavBar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

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
      <nav ref={navRef}>
      <a href="/#">HOME</a>
        <a href="/<about">ABOUT US</a>
        <a href="/supoort">SUPPORT</a>
        <a href="/#">CONTACT US</a>
        <a href="/login">SIGN IN</a>
        <a href="/signup">SIGN UP</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

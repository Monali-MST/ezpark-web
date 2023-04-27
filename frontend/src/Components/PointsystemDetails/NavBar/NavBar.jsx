import React from "react";
import Logo from "../../../Assets/logo_without_text.png";
import pointImg from "../../../Assets/point_picture.png";
import "../NavBar/NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <img
            alt=""
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-center"
          />{" "}
          <span className="yell">EZ </span>
          <span className="blk">Park</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#badges">Badges</Nav.Link>
            <Nav.Link href="#points">Points</Nav.Link>
            <Nav.Link href="#discounts">Discounts</Nav.Link>
            <Nav.Link href="#refunds">Refund</Nav.Link>
            <Nav.Link href="/pointsystem">
              {" "}
              <img
                alt=""
                src={pointImg}
                width="30"
                height="30"
                className="d-inline-block align-center"
              />{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <section>
    //   <nav className="navbar">
    //     <div className="navbar-container">
    //       <div className="logo-section">
    //         <div className="logo-img">
    //           <img className="logo" src={Logo} alt="logo" />
    //         </div>
    //         <div className="logo-name">
    //           <span className="yell">EZ </span>
    //           <span className="blk">Park</span>
    //         </div>
    //       </div>

    //       <div className="item-list">
    //         <ul className="menu">
    //           <li className="navbar-item">
    //             <a href="/" className="menu-btn active">
    //               CONTACT US
    //             </a>
    //           </li>
    //           <li className="navbar-item">
    //             <a href="/" className="menu-btn">
    //               SUPPORT
    //             </a>
    //           </li>
    //           <li className="navbar-item">
    //             <a href="/" className="menu-btn">
    //               BOOKING
    //             </a>
    //           </li>
    //           <li className="navbar-item">
    //             <a href="/" className="menu-btn">
    //               MY ACCOUNT
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </section>
  );
};

export default NavBar;

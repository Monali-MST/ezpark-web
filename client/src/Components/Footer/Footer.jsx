import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../../Assets/logo_trans.png";
import { FaFacebook, FaInstagramSquare, FaLinkedin,FaRegCopyright } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container" style={{padding:"30px"}}>
        <Row>
          <Col>
            <div>
              <div className="logo-img">
                <img
                  className="logo"
                  src={Logo}
                  alt="logo"
                  style={{ width: "100px", height: "100px", padding: "10px",marginLeft:"60px" }}
                />
                <p style={{textAlign:"center",fontFamily:"bold"}}>WE HAVE A SPOT FOR YOU</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="topic" style={{marginLeft:"50px"}}>
              <h4>Quick Link</h4>
              <ul className="list-unstyled" >
                <li>
                  <a href="/" className="text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/signup" className="text-decoration-none">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/login" className="text-decoration-none">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/supoort" className="text-decoration-none">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="topic"style={{marginLeft:"100px"}}>
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>
                  <p>Katubedda,Moratuwa</p>
                </li>
                <li>
                  <p>011-4545567</p>
                </li>
                <li>
                  <p>EzPark@gmail.com</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="topic"style={{marginLeft:"100px"}}>
            <h4>Follow Us on</h4>

              <ul className="d-flex gap-3 list-unstyled">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaInstagramSquare />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="copyright"style={{marginLeft:"100px"}}>
              Copyright <FaRegCopyright/><p>Developed and maintained by company</p>
              
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;

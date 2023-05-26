import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import myImage from "../../Assets/bgimg.jpg";
import myImage1 from "../../Assets/vehicle_line.jpg"
import Logo from "../../Assets/logo_without_text.png";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      navigate("/signup");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="section">
        <Navbar />

        <section id="coverpage">
          <div
            style={{
              backgroundImage: `url(${myImage})`,
              backgroundSize: "cover",
              height: "80vh",
            }}
          >
            <div className="logo-section">
              <div className="logo-img">
                <img className="logo" src={Logo} alt="logo" />
              </div>
              <div className="logo-name">
                <span className="yell">EZ </span>
                <span className="blk">Park</span>
              </div>
            </div>
            <p
              style={{
                color: "#85857F",
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              PARKING AT YOUR FINGERTIPS
            </p>

            <div className="text" style={{}}>
              <p style={{ color: "white", fontSize: "50px" }}>
                {" "}
                Save Time.
                <br />
                Save Money.
              </p>
            </div>
            <Button className="start" onClick={handleClick}>
              Get Started
            </Button>
          </div>

          {/* <button className="start"onClick={handleClick}>VerEmail</button> */}

          <h1 className="text1" style={{marginTop:"10px"}}>WE HAVE A SPOT FOR YOU. </h1>
        </section>
        <Footer />
      </div>
      <div className="section">
        <div className="section-title">HOW IT WORKS</div>
        <div className="two-column-container">
          <div className="column">
            <p style={{textAlign:"justify",margin:"50px",paddingTop:"100px",fontFamily:"bold",fontSize:"20px"}}>
              A vehicle parking system is an automated solution that simplifies
              the process of parking and managing vehicles in a parking
              facility. It includes features such as entry gates, sensors,
              ticketing, allocation of parking spaces, payment systems, and exit
              gates. By utilizing technology and real-time data, the system
              optimizes the utilization of parking spaces, improves traffic
              flow, and enhances the overall parking experience for users. It
              provides convenience, efficiency, and effective management of
              vehicles in parking areas, making it an essential tool for modern
              parking facilities.
            </p>
          </div>
          <div className="column">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/watch?v=CK7KYruoGZY"
                title="Embedded video"

                style={{width:"700px",height:"500px",marginTop:"75px"}}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-title">360 veiw</div>
      </div>
      <div className="section" style={{ backgroundColor: "black" }}>
      <div
            style={{
              backgroundImage: `url(${myImage1})`,
              backgroundSize: "cover",
              height: "75vh",
            }}
          >
      </div>
      </div>
      <div
        className="section"
        style={{ backgroundColor: "#FAA41E", height: "75vh" }}
      >
        <p> OUR SERVICES</p>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

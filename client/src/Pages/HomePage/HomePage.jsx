import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import myImage from "../../Assets/bgimg.jpg";
import myImage1 from "../../Assets/booking.jpg";
import myImage2 from "../../Assets/OnlinePayment.jpg";
import myImage3 from "../../Assets/user.jpg";
import myImage4 from "../../Assets/parking.jpg";
import myImage5 from "../../Assets/refund.jpg";
import myImage6 from "../../Assets/playstore.png";
import myImage7 from "../../Assets/phone.webp";
import myImage8 from "../../Assets/location.webp";
import Logo from "../../Assets/logo_without_text.png";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import YouTube from "react-youtube";

const HomePage = () => {
  const videoId = "CK7KYruoGZY"; // Replace with your YouTube video ID
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

        <div
          style={{
            "--brightness": "1",
            backgroundImage: `url(${myImage})`,
            backgroundSize: "cover",
            height: "100vh",
            filter: "brightness(var(--brightness))",
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
          <div
            className="text"
            style={{
              color: "white",
              textShadow: " 2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontSize: "3rem",
              fontWeight: "bold",
              marginLeft: "10vh",
              paddingTop: "30vh",
            }}
          >
            <p>
              {" "}
              Save Time.
              <br />
              Save Money.
            </p>
          </div>
          <Button
            variant="outline-warning"
            onClick={handleClick}
            style={{
              borderRadius: "5rem",
              marginLeft: "10vh",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div
        className="section"
        style={{ backgroundColor: "black", height: "110vh" }}
      >
        <div className="card-container">
          <div className="card-wrapper">
            <Card
              style={{ width: "15rem", height: "20rem", marginLeft: "10rem" }}
            >
              <Card.Img
                variant="top"
                src={myImage1}
                style={{ height: "8rem" }}
              />
              <Card.Body>
                <Card.Title>Online Bookings</Card.Title>
                <Card.Text style={{ fontSize: "14px" }}>
                  Allow users to book parking slots for their vehicles in
                  advance. Users can select the date, time, and duration for
                  which they need parking.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "15rem",
                height: "20rem",
                marginLeft: "26rem",
                marginTop: "-3rem",
              }}
            >
              <Card.Img
                variant="top"
                src={myImage2}
                style={{ height: "8rem" }}
              />
              <Card.Body>
                <Card.Title>Payment Processing</Card.Title>
                <Card.Text style={{ fontSize: "14px" }}>
                  Integrate a secure payment gateway to handle online payments
                  for parking reservations. Users can make payments using debit
                  cards or other available payment methods.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{ width: "15rem", height: "20rem", marginLeft: "10rem" }}
            >
              <Card.Img
                variant="top"
                src={myImage3}
                style={{ height: "8rem" }}
              />
              <Card.Body>
                <Card.Title>User Accounts</Card.Title>
                <Card.Text style={{ fontSize: "14px" }}>
                  Provide user registration and login functionality, allowing
                  users to create accounts to manage their parking bookings,
                  view booking history, and update personal information.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "15rem",
                height: "20rem",
                marginLeft: "26rem",
                marginTop: "-3rem",
              }}
            >
              <Card.Img
                variant="top"
                src={myImage5}
                style={{ height: "8rem" }}
              />
              <Card.Body>
                <Card.Title>Cancellation and Refunds</Card.Title>
                <Card.Text style={{ fontSize: "14px" }}>
                  Allow users to cancel their parking reservations within a
                  specified time frame and provide a refund based on the
                  cancellation policy.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{ width: "15rem", height: "20rem", marginLeft: "10rem" }}
            >
              <Card.Img
                variant="top"
                src={myImage4}
                style={{ height: "8rem" }}
              />
              <Card.Body>
                <Card.Title>Availability Check</Card.Title>
                <Card.Text style={{ fontSize: "14px" }}>
                  Provide real-time availability of parking slots, allowing
                  users to check if slots are available for their desired date
                  and time.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-title" style={{ backgroundColor: "#FAA41E" }}>
          HOW IT WORKS
        </div>
        <div className="two-column-container">
          <div className="column">
            <p
              style={{
                textAlign: "justify",
                margin: "50px",
                paddingTop: "100px",
                fontFamily: "bold",
                fontSize: "20px",
              }}
            >
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
              <YouTube
                videoId={videoId}
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  marginTop: "-80px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-title">Location</div>
        <div className="two-column-container">
          <div className="column">
          <img
              src={myImage8}
              alt="phone"
              style={{ width: "500px", marginLeft: "100px" ,marginTop:"100px"}}
            />
          </div>
          <div className="column">
            <div>
              <p
                style={{
                  textAlign: "justify",
                  margin: "50px",
                  paddingTop: "100px",
                  fontFamily: "bold",
                  fontSize: "20px",
                }}
              >
                A vehicle parking system is an automated solution that
                simplifies the process of parking and managing vehicles in a
                parking facility. It includes features such as entry gates,
                sensors, ticketing, allocation of parking spaces, payment
                systems, and exit gates. By utilizing technology and real-time
                data, the system optimizes the utilization of parking spaces,
                improves traffic flow, and enhances the overall parking
                experience for users. It provides convenience, efficiency, and
                effective management of vehicles in parking areas, making it an
                essential tool for modern parking facilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section"
        style={{ backgroundColor: "#FAA41E", height: "75vh" }}
      >
        <Row>
          <Col>
            <p
              style={{
                fontSize: "50px",
                color: "white",
                paddingTop: "15vh",
                paddingLeft: "5vh",
              }}
            >
              BROWSERING ON YOUR PHONE?
            </p>
            <p style={{ fontSize: "40px", color: "white", paddingLeft: "5vh" }}>
              Try out the Ez Park App on Android.
            </p>
            <img src={myImage6} alt="playStore" style={{ width: "300px" }} />
          </Col>
          <Col>
            <img
              src={myImage7}
              alt="phone"
              style={{ width: "500px", marginLeft: "100px" }}
            />
          </Col>
        </Row>
      </div>
      <div
        className="section"
        style={{
          backgroundColor: "#CBCBCB",
          height: "30vh",
          border: "3px",
          borderColor: "black",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

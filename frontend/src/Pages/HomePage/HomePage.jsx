import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import myImage from "../../Assets/bgimg.jpg";
import myImage1 from "../../Assets/booking.jpg";
import myImage2 from "../../Assets/OnlinePayment.jpg";
import myImage3 from "../../Assets/user_Acc.png";
import myImage4 from "../../Assets/parking.jpg";
import myImage5 from "../../Assets/refund.jpg";
import Logo from "../../Assets/logo_without_text.png";
import Card from "react-bootstrap/Card";

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
          <div
            className="text"
            style={{
              color: "white",
              textShadow: " 2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontSize: "3rem",
              fontWeight: "bold",
              marginLeft: "10vh",
              paddingTop:"30vh",
              marginLeft: "10vh",
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
            variant="warning"
            onClick={handleClick}
            style={{
              borderRadius: "5rem",
              backgroundColor: "#F8D297",
              alignItems: "center",
             
              marginLeft: "10vh",
            }}
          >
            Get Started
          </Button>{" "}
        </div>

        {/* <button className="start"onClick={handleClick}>VerEmail</button> */}

        <h1
          className="text1"
          style={{
            marginTop: "10px",
            color: "#FAA41E",
            fontSize: "2rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          WE HAVE A SPOT FOR YOU.{" "}
        </h1>
      </div>
      <div className="section">
        <div className="section-title">HOW IT WORKS</div>
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
              <iframe
                src="https://www.youtube.com/watch?v=CK7KYruoGZY"
                title="Embedded video"
                style={{ width: "700px", height: "500px", marginTop: "75px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-title">360 veiw</div>
      </div>
      <div className="section" style={{ backgroundColor: "black" }}>
        <div className="card-container">
          <div>
            <Card style={{ width: "16rem", height: "20rem" }}>
              <Card.Img
                variant="top"
                src={myImage1}
                style={{ height: "10rem" }}
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
          </div>
          <div>
            <Card
              style={{ width: "16rem", height: "20rem", marginTop: "30vh" }}
            >
              <Card.Img
                variant="top"
                src={myImage2}
                style={{ height: "10rem" }}
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
            <Card style={{ width: "16rem", height: "20rem" }}>
              <Card.Img
                variant="top"
                src={myImage3}
                style={{ height: "10rem" }}
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
          </div>
          <div>
            <Card
              style={{ width: "16rem", height: "20rem", marginTop: "30vh" }}
            >
              <Card.Img
                variant="top"
                src={myImage4}
                style={{ height: "10rem" }}
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
          <div>
            <Card style={{ width: "16rem", height: "20rem" }}>
              <Card.Img
                variant="top"
                src={myImage5}
                style={{ height: "10rem" }}
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
        </div>
      </div>
      <div
        className="section"
        style={{ backgroundColor: "#FAA41E", height: "75vh" }}
      >
        <p
          style={{
            fontSize: "50px",
            color: "white",
            paddingTop: "10vh",
            paddingLeft: "5vh",
          }}
        >
          BROWSERING ON YOUR PHONE?
        </p>
        <p style={{ fontSize: "50px", color: "white", paddingLeft: "5vh" }}>
          Try out the Ez Park App on Android.
        </p>
      </div>
      <div
        className="section"
        style={{ backgroundColor: "#CBCBCB", height: "25vh" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

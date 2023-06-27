import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import { Col, Row,Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  FaRegEdit,
  FaRegCheckSquare,
  FaRegCreditCard,
  FaUserCircle,
  FaCarAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";
import "./UserDashboardPage.css";

const UserDashboard = () => {
  const [UserDashboard, setUserDashboard] = useState([]);
  useEffect(() => {
    const getUserDashboard = async () => {
      const reqData = await fetch("http://localhost:8800/review");
      const resData = await reqData.json();
      setUserDashboard(resData);
      console.log(reqData);
    };
    getUserDashboard();
  }, []);
  
  return (
    <div>
      <Header />
      <Row>
        <Col>
      <Sidebar/>
      </Col>
      <Col>
        <div
          className="container"
          style={{ marginLeft: "40px", marginBottom: "10px" }}
        >
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card" style={{ borderColor: "#FAA41E" }}>
                <div className="card-body">
                  <h5 className="card-title">Book a Parking Spot</h5>
                  <p className="card-text">
                    <FaRegEdit />
                  </p>
                  <Button href="/SlotSelection" className="btn-dark">
                    Go to Booking
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ borderColor: "#FAA41E" }}>
                <div className="card-body">
                  <h5 className="card-title">My Bookings</h5>
                  <p className="card-text">
                    <FaRegCheckSquare />
                  </p>
                  <Button href="/mybooking" className="btn-dark">
                    Go to My Booking
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ borderColor: "#FAA41E" }}>
                <div className="card-body">
                  <h5 className="card-title">Payment History</h5>
                  <p className="card-text">
                    <FaRegCreditCard />
                  </p>
                  <Button href="/mybooking" className="btn-dark">
                    Go to My Booking
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ borderColor: "#FAA41E" }}>
                <div className="card-body">
                  <h5 className="card-title">Profile Settings</h5>

                  <p className="card-text">
                    <FaUserCircle />
                  </p>

                  <Button href="/myaccount" className="btn-dark">
                    Go to Profile
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ borderColor: "#FAA41E" }}>
                <div className="card-body">
                  <h5 className="card-title">Support</h5>
                  <p className="card-text">
                    <FaRegQuestionCircle />
                  </p>

                  <Button href="/support" className="btn-dark">
                    Support
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ borderColor: "#FAA41E" }}>
                <div className="card-body">
                  <h5 className="card-title">My Vehicle Details</h5>
                  <p className="card-text">
                    <FaCarAlt />
                  </p>

                  <Button href="/vehicledetails" className="btn-dark">
                    Vehicle Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Form.Group>
     
      <Form.Control type="text" plaintext readOnly style={{borderColor:"black",width:"400px",height:"70px",marginRight:"100px"}} value={UserDashboard.Review}/>
    </Form.Group>
    <Form.Group>
      
      <Form.Control type="text" plaintext readOnly style={{borderColor:"black",width:"400px",height:"70px"}} value={UserDashboard.Review}  />
    </Form.Group>
        </div>
      
      
      </Col>
      </Row>
     
   
    </div>
  );
};

export default UserDashboard;

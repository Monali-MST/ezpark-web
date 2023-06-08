import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MyImage from "../../Assets/User_Icon.png";
import Image from "react-bootstrap/Image";
import { Col, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

import "./MyProfilePage.css";

const ProfilePage = () => {
 
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    profilePicture: ""
  });

  // const handleProfilePictureChange = (e) => {
  //   // Handle profile picture change and update state
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setProfilePicture(reader.result);
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleEditClick = (field) => {
    // Handle edit button click
    console.log(`Edit button clicked for ${field}`);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log("Form submitted!");
  //   console.log("First Name:", firstName);
  //   console.log("Last Name:", lastName);
  //   console.log("Mobile Number:", mobileNumber);
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   console.log("Profile Picture:", profilePicture);
  // };
  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Row>
      <Header />
      <Col>
        <Sidebar />
      </Col>
      <Col style={{ background: "linear-gradient(to right,white, #FAA41E)" }}>
        <div >
        <div className="profile-container"  >
          <Row>
         
            {/* <Col md={6}>
              <div className="profile-picture"style={{marginLeft:"-500px"}}>
                <Image
                  src={profilePicture || MyImage}
                  alt="Profile"
                  roundedCircle
                />
              <Button
                variant="dark"
                id="profilePictureInput"
                type="file"
                onChange={handleProfilePictureChange}
                accept="image/*"
                style={{
                  width: "150px",
                  height: "40px",
                  borderRadius: "20px",
                  marginLeft: "25px",
                  marginTop: "50px",
                }}
              >
                Change Picture{" "}
              </Button>
              </div>

            </Col> */}
            <Col md={6}>
            
              <Form style={{marginLeft:"-300px"}}>
              <h1 style={{marginTop:"-60px",marginBottom:"20px"}}>Personal Information</h1>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    First Name
                  </Form.Label>
                  <Col sm={20}>
                    <Form.Control
                      type="text"
                      value={formValues.firstName}
                      onChange={handleChange}
                      style={{ marginLeft: "120px", marginTop: "-35px" }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Last Name
                  </Form.Label>
                  <Col sm={20}>
                    <Form.Control
                      type="text"
                      value={formValues.lastName}
                      onChange={handleChange}
                      style={{ marginLeft: "120px", marginTop: "-35px" }}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Mobile Number
                  </Form.Label>
                  <Col sm={20}>
                    <Form.Control
                      type="tel"
                      value={formValues.mobileNumber}
                      onChange={handleChange}
                      style={{ marginLeft: "120px", marginTop: "-35px" }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Email
                  </Form.Label>
                  <Col sm={15}>
                    <Form.Control
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      style={{ marginLeft: "120px", marginTop: "-35px" }}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Password
                  </Form.Label>
                  <Col sm={15}>
                    <Form.Control
                      type="password"
                      value={formValues.password}
                      onChange={handleChange}
                      style={{ marginLeft: "120px", marginTop: "-35px" }}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 3 }}>
                    <Button
                      type="submit"
                      style={{
                        marginLeft: "250px",
                        marginTop: "35px",
                        backgroundColor: "black",
                        borderColor: "black",
                        borderRadius: "20px",
                        width:"100px"
                      }}
                    >
                      Save
                    </Button>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button
                      type="submit"
                      style={{
                        marginLeft: "150px",
                        marginTop: "-10px",
                        backgroundColor: "black",
                        borderColor: "black",
                        borderRadius: "20px",
                        width:"100px"
                      }}
                    >
                      Update
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProfilePage;

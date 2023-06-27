import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./MyProfilePage.css";

const ProfilePage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8800/user')
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <div className="Profilecard">
            <div className="card shadow mb-4">
              <div className="content">
                <h2>Your Profile</h2>
                <table className="table">
                  <tbody>
                    {userData.map((user) => (
                      <React.Fragment key={user.UserID}>
                        <tr>
                          <td>UserID</td>
                          <td>{user.UserID}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>FirstName</td>
                          <td>{user.FirstName}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>LastName</td>
                          <td>{user.LastName}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{user.Email}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Contact Number</td>
                          <td>{user.MobileNo}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Password</td>
                          <td>{user.Password}</td>
                          <td></td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;

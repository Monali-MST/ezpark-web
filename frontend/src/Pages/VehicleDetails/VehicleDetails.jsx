import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import myImage from "../../Assets/Vehicledetails.webp";
import { getUser } from "../../Helper/get_username";
import axios from "axios";

function VehicleDetails() {
  const [VehicleDetails, setVehicleDetails] = useState([]);
  const { email } = getUser();

  useEffect(() => {
    const getVehicleDetails = async () => {
      try {
        const vehicle_details = await axios.post(
          "http://localhost:8800/vehicles",
          {email}
        );
      //const reqData = await fetch("http://localhost:8800/vehicles", email);
      // const resData = await vehicle_details.data().json();
      setVehicleDetails(vehicle_details.data);
      console.log(vehicle_details.data);
      } catch (err) {
        console.log(err);
      }

    };
    getVehicleDetails();
  }, []);
  // function VehicleDetails({ Email }) {
  //   const [vehicleDetails, setVehicleDetails] = useState([]);

  //   useEffect(() => {
  //     const fetchVehicleDetails = async () => {
  //       try {
  //         const response = await fetch(`http://localhost:8800/vehicles?email=${Email}`);
  //         const data = await response.json();
  //         setVehicleDetails(data);
  //       } catch (error) {
  //         console.error("Error fetching vehicle details:", error);
  //       }
  //     };

  //     if (Email) {
  //       fetchVehicleDetails();
  //     }
  //   }, [Email]);

  return (
    <div>
      <Header />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <div
            style={{
              backgroundImage: `url(${myImage})`,
              backgroundSize: "cover",
              height: "70vh",
              width: "70vh",
              marginTop: "70px",
              marginRight: "300px",
              borderRadius: "30px",
            }}
          ></div>
        </Col>

        <Col>
          <table
            className="table table-bordered table-striped"
            style={{ marginLeft: "-150px", marginTop: "80px" }}
          >
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>VehicleType</th>
                <th>VehicleNo</th>
              </tr>
            </thead>
            <tbody>
              {VehicleDetails.map((VehicleDetails, index) => (
                <tr key={index + 1}>
                  <td>{index} </td>
                  <td>{VehicleDetails.VehicleNo} </td>
                  <td>{VehicleDetails.VehicleType} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
}

export default VehicleDetails;

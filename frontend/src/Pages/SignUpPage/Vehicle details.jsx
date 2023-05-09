import React, { useState } from "react";
import myImage from "../../Assets/parking-signup.jpg";
import { Col, Container, Row, Form } from "react-bootstrap";

function VehicleDetails() {
  const [formValues, setformValues] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedVehicles = [...formValues];
    updatedVehicles[index] = {
      ...updatedVehicles[index],
      [name]: value,
    };
    setformValues(updatedVehicles);
  };

  const handleAddVehicle = () => {
    setformValues([...formValues, { VehicleNo: "", VehicleType: "" }]);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <div
            style={{
              backgroundImage: `url(${myImage})`,
              backgroundSize: "cover",
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              filter: "brightness(1)",
             
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>Vehicle Details</h2>
            <button className="add-btn" onClick={handleAddVehicle}>
              Add Vehicle
            </button>
          </div>
        </Col>
        <Col md={6}>
          {formValues.map((formValue, index) => (
            <div key={index} className="mb-3">
              <Form>
                <Row>
                  <Form.Group as={Col} controlId="formGridVehicleNo">
                    
                    <Form.Control
                      type="text"
                      placeholder="vehicle number"
                      name="VehicleNo"
                      value={formValue.VehicleNo}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridVehicleType">
                    
                    <Form.Select
                      name="VehicleType"
                      value={formValue.VehicleType}
                      onChange={(e) => handleChange(e, index)}
                    >
                      <option value="">Choose...</option>
                      <option value="Car">Car</option>
                      <option value="Van">Van</option>
                      <option value="Bus">Bus</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default VehicleDetails;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import myImage from "../../Assets/parking-signup.jpg";
import { Col, Container, Row, Form } from "react-bootstrap";

function VehicleDetails({ formValues, setFormValues }) {
  const [formValuesw, setFormValuesw] = useState([
    {
      VehicleNo: "",
      VehicleType: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedVehicles = [...formValuesw];
    updatedVehicles[index] = {
      ...updatedVehicles[index],
      [name]: value,
    };
    setFormValuesw(updatedVehicles);
    setFormValues((prev) => ({
      ...prev,
      Vehical: updatedVehicles,
    }));
  };

  const handleAddVehicle = () => {
    if (
      !formValuesw[formValuesw.length - 1].VehicleNo ||
      !formValuesw[formValuesw.length - 1].VehicleType
    ) {
      alert("Please fill all the fields");
    } else {
      setFormValuesw([...formValuesw, { VehicleNo: "", VehicleType: "" }]);
    }
  };

  const handleSubmit = () => {};

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
          ></div>
        </Col>
        <Col md={6}>
          <Button
            variant="outline-warning"
            onClick={handleAddVehicle}
            style={{ marginBottom: "20px" }}
          >
            Add Vehicle
          </Button>
          {formValuesw.slice(0, 5).map((formValuew, index) => (
            <div key={index} className="mb-4">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Form.Group as={Col} controlId={`formGridVehicleNo${index}`}>
                    <Form.Control
                      type="text"
                      placeholder="Vehicle Number"
                      name="VehicleNo"
                      value={formValuew.VehicleNo}
                      onChange={(e) => handleChange(e, index)}
                      style={{ marginTop: "4px" }}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId={`formGridVehicleType${index}`}
                  >
                    <Form.Select
                      name="VehicleType"
                      value={formValuew.VehicleType}
                      onChange={(e) => handleChange(e, index)}
                      style={{ marginTop: "4px" }}
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

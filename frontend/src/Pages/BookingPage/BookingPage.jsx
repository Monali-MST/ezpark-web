import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import myImage from "../../Assets/parking-booking.jpg";

import "./BookingPage.css";

function BookingPage() {
  return (
    
    <div
    
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="booking-form" style={{ color: "white",marginRight:"100px"}}>
      <div className="booking-form-container" style={{ marginRight:"600px",marginTop:"50px", padding:"50px" }}>
        
          <Form>
            <h2>MAKE YOUR SPACE</h2>
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label style={{ paddingTop: "2px" }}> Username</Form.Label>
              <Form.Control
                type="text"
                style={{ borderColor: "#FAA41E", textAlign: "left", height: "35px" }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={{ paddingTop: "2px" }}>Email</Form.Label>
              <Form.Control
                type="Email"
                style={{ borderColor: "#FAA41E",textAlign: "left", height: "35px" }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridVehicleNumber">
              <Form.Label style={{ paddingTop: "2px" }}>
                Vehicle Number
              </Form.Label>
              <Form.Control
                type="text"
                style={{ borderColor: "#FAA41E",textAlign: "left", height: "35px" }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBookedDate">
              <Form.Label style={{ paddingTop: "2px" }}>Booked Date</Form.Label>
              <Form.Control
                type="Date"
                style={{ borderColor: "#FAA41E",textAlign: "left", height: "35px" }}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridMobNum">
                <Form.Label style={{ paddingTop: "5px" }}>
                  Start Time
                </Form.Label>
                <Form.Control
                  type="time"
                  style={{borderColor: "#FAA41E", textAlign: "left", height: "35px" }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFixedNum">
                <Form.Label style={{ paddingTop: "5px" }}>End Time</Form.Label>
                <Form.Control
                  type="time"
                  style={{borderColor: "#FAA41E", textAlign: "left", height: "35px" }}
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridPaymentMethod">
              <Form.Label style={{ paddingTop: "25px" }}>
                Payment Method
              </Form.Label>
              <Form.Select style={{borderColor: "#FAA41E"}}>
                <option>Online</option>
                <option>Cash Payment</option>
              </Form.Select>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{
                marginTop: "15px",
                width: "175px",
                backgroundColor: "#FAA41E",
                marginLeft: "100px",
                marginTop:"10px"
              }}
            >
              Pay Now
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;

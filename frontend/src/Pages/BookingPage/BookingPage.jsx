import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedHrs, setSelectedHrs] = useState("");
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const handleHrsChange = (event) => {
    setSelectedHrs(event.target.value);
  };
  return (
    <>
      {["Dark"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>BOOK A SLOT</Card.Header>
          <Card.Body>
            <Card.Text>
              <div>
                <label htmlFor="timeSelect">Select Date:</label>
                
                <DatePicker
                
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  isClearable
                  placeholderText="Select a date"
                  
                />
          
                <Form>
      <Row>
        <Col>
        <label htmlFor="timeSelect">Select Time:</label>
        
          <select
                    id="timeSelect"
                    value={selectedTime}
                    onChange={handleTimeChange}
                  >
                    <option value="">-- Select --</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="15:45">03:45 PM</option>
                    {/* Add more options as needed */}
                  </select>
                  
        </Col>
        <Col>
        <label htmlFor="timeSelect">Select hours:</label>
         
          <select
                    id="timeSelect"
                    value={selectedHrs}
                    onChange={handleHrsChange}
                  >
                    <option value="">-- Select --</option>
                    <option value="09:00">1 hrs</option>
                    <option value="12:30">2 hrs</option>
                    <option value="15:45">3 hrs</option>
                    {/* Add more options as needed */}
                  </select>
                 
        </Col>
      </Row>
    </Form>
                <Button variant="secondary">Select slot</Button>{" "}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
export default BookingPage;

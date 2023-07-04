import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";
import "./Test.css";

function Test() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedHrs, setSelectedHrs] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState("10:00");

  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      navigate("/booking");
    } catch (err) {
      console.log(err);
    }
  };
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


      <div className="row">
          <div className="row justify-content-center ">

            <div className="float-center w-50">
              <TimePicker onChange={onChange} value={value} className="timepikerstyle rounded border-0"/>

            </div>
          </div>
        </div>
    </>
  );
}
export default Test;

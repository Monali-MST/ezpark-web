import React, { useState, useEffect } from "react";
import "./MyBookingPage.css";
import * as BsIcons from "react-icons/bs";
import Countdown from "react-countdown";
import axios from "axios";
import moment from "moment";
import Counter from "../../Components/CountDown/Counter";
import BookingButtons from "../../Components/BookingButtons/BookingButtons";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";


const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);

  const [showPopUp, setShowPopUp] = useState(false);
  const [bookinId, setBookinId] = useState(0);
  const [bookinSlot, setBookingSlot] = useState(0);
  const [bookinDate, setBookingDate] = useState("");
  const [refresh, setRefresh] = useState(false);
  const popup = document.getElementById("popup");
  var today = new Date();
  var hours = today.getHours().toString();
  var minutes = today.getMinutes().toString();
  var seconds = today.getSeconds().toString();

  if (hours.length != 2) {
    hours = "0" + hours;
  }

  if (minutes.length != 2) {
    minutes = "0" + minutes;
  }

  if (seconds.length != 2) {
    seconds = "00";
  }

  var endTime = hours + ":" + minutes + ":" + seconds;

  const [endTimeValue, setEndTimeValue] = useState(endTime);
  const [previousEndTimeValue, setPreviousEndTimeValue] = useState(endTime);

  const saveValue = () => {
    if (
      previousEndTimeValue == endTimeValue ||
      previousEndTimeValue > endTimeValue ||
      endTime > endTimeValue
    ) {
      alert("Time Not Valide");
    } else {
      axios
        .put("http://localhost:8800/api/user/timeExtend", {
          Time: endTimeValue,
          BookID: bookinId,
          BookedDate: bookinDate,
          Slot: bookinSlot,
        })
        .then((res) => {
          setBookinId(0);
          if (res.status == 200) {
            popup.classList.remove("open-popup");
            alert(res.data);
            setRefresh(!refresh);
          }
        })
        .catch((err) => {
          console.log(err);
          setShowPopUp(false);
          popup.classList.remove("open-popup");
        });
    }
  };

  useEffect(() => {
    if (endTimeValue.length < 8) {
      setEndTimeValue(endTimeValue + ":00");
    }
  }, [endTimeValue]);

  useEffect(() => {
    const Email = localStorage.getItem("Email");
    console.log(Email);
    axios
      .get(`http://localhost:8800/api/user/getUserBookings/${Email}`)
      .then((res) => {
        console.log("response", res);
        setBookingHistory([...res.data]);
      })
      .catch((err) => {
        //alert(err.message);
        console.log(err.response.data);
        alert(err.response.data);
      });
  }, []);

  useEffect(() => {
 
   const Email = localStorage.getItem("Email");
    axios
      .get(`http://localhost:8800/api/user/getUserBookings/${Email}`)
      .then((res) => {
        console.log("response", res);
        setBookingHistory([...res.data]);
      })
      .catch((err) => {
        //alert(err.message);
        console.log(err.response.data);
        alert(err.response.data);
      });
  }, [refresh]);

  const popOpHandler = () => {
    if (bookinId != 0) {
      popup.classList.add("open-popup");
    }
  };

  useEffect(() => {
    popOpHandler();
    console.log("popup");
  }, [showPopUp]);

  const reSetBookinId = (event) => {
    event.preventDefault();

    console.log(bookinId);
    if (bookinId != 0) {
      setBookinId(0);
    }

    popup.classList.remove("open-popup");
  };

  return (
    <>
      <div className="booking-history">
        <h1>Booking History</h1>
      </div>
      {bookingHistory.length > 0 ? (
        <>
          {bookingHistory.map((item, index) => (
            <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
              <div className="card w-100 pt-2 pb-2">
                <div className="row">
                  <div className="col-1">{index + 1}</div>
                  <div className="col-2" style={{ textAlign: "left" }}>
                    <BsIcons.BsCalendar4 size={40} />
                  </div>
                  <div className="col-3" style={{ textAlign: "left" }}>
                    <div className="row">Slot {item.slot}</div>
                    <div className="row">{item.VehicleNo}</div>
                    <div className="row">
                      {item.BookedDate}
                      <br /> {item.StartTime} - {item.EndTime}
                    </div>
                  </div>
                  <div className="col-3 pt-4" style={{ textAlign: "left" }}>
                    <div className="rounded-box shadow p-3 mb-5 bg-white rounded">
                      <div className="row">
                        <div className="col">
                          <p className="text-center font-weight-bold">
                            Remaining Time:
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="text-center">
                            <Counter item={item} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3" style={{ textAlign: "left" }}>
                    <BookingButtons
                      item={item}
                      setShowPopUp={setShowPopUp}
                      showPopUp={showPopUp}
                      setBookinId={setBookinId}
                      setPreviousEndTimeValue={setPreviousEndTimeValue}
                      setBookingSlot={setBookingSlot}
                      setBookingDate={setBookingDate}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}{" "}
        </>
      ) : (
        <div>No Booking yet</div>
      )}
      <div className="pb-5"></div>

      <div className="popup shadow-lg" id="popup">
        <div className="row">
          <div className="text-center pt-3">
            <h2>Edit Time</h2>
          </div>
        </div>
        <div
          className="row  pt-2"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          <div
            className="float-center "
            style={{ paddingLeft: "32px", paddingRight: "32px", height: "1cm" }}
          >
            <TimePicker
              className="timepickerstyle rounded border-0 w-100"
              onChange={setEndTimeValue}
              value={endTimeValue}
            />
          </div>
        </div>
        <div className="float-center ">
          <button className="yes" type="button" onClick={saveValue}>
            Yes
          </button>
          <button className="no" type="button" onClick={reSetBookinId}>
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingHistory;

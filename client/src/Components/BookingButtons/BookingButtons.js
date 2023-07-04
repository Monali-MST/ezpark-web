import React from "react";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookingButtons = (props) => {
  const [isCompleted, setIsCompleted] = useState("");

  useEffect(() => {
    const [hours, minutes, seconds] = props.item.StartTime.split(":");
    const [ehours, eminutes, eseconds] = props.item.EndTime.split(":");

    var tempDate = props.item.BookedDate;
    const momentObj = moment(props.item.BookedDate).utcOffset("+05:30");

    // Convert to local timezone (Sri Lanka)

    console.log("moment", momentObj);

    const tempYear = momentObj.year();
    const tempMonth = momentObj.month() + 1; // Add 1 since getMonth() returns a zero-based index
    const tempDay = momentObj.date();

    var year = tempYear.toString();
    var month = tempMonth.toString();
    var day = tempDay.toString();

    const stimestamp = new Date(
      year,
      month - 1,
      day,
      hours,
      minutes,
      seconds
    ).getTime();
    const etimestamp = new Date(
      year,
      month - 1,
      day,
      ehours,
      eminutes,
      eseconds
    ).getTime();
    const freezTime = etimestamp + 900000;

    if (Date.now() >= stimestamp && Date.now() < etimestamp) {
      setIsCompleted("onGoing");
    } else {
      if (Date.now() < stimestamp) {
        setIsCompleted("pending");
      }

      if (Date.now() < freezTime && Date.now() > etimestamp) {
        setIsCompleted("Freeze");
      }

      if (Date.now() > etimestamp && Date.now() > freezTime) {
        setIsCompleted("finished");
      }
    }

    console.log(isCompleted);
  }, []);

  const cancleBoking = (event) => {
    event.preventDefault();
    var bookingId = props.item.BookingID;
    axios
      .delete(`http://localhost:8800/api/user/deletebooking/${bookingId}`)
      .then((res) => {
        //console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const popUpHandler = (event) => {
    event.preventDefault();
    props.setShowPopUp(!props.showPopUp);
    props.setBookinId(props.item.BookingID);
    props.setBookingDate(props.item.BookedDate);
    props.setPreviousEndTimeValue(props.item.EndTime);
    props.setBookingSlot(props.item.slot);
  };
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      navigate("/rating");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {isCompleted === "pending" ? (
        <div
          className="text-center"
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
        >
          <div className="row">
            <button
              type="button"
              class="btn btn-secondary btn-lg btn-block mt-4"
              onClick={cancleBoking}
            >
              Cancel Booking
            </button>
          </div>
        </div>
      ) : (
        <>
          {isCompleted === "onGoing" ? (
            <div
              className="text-center"
              style={{ paddingLeft: "50px", paddingRight: "50px" }}
            >
              <div className="row">
                <button
                  type="button"
                  class="btn btn-primary btn-lg btn-block mt-4"
                  onClick={popUpHandler}
                >
                  Extend Booking
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  class="btn btn-dark btn-lg btn-block mt-4"
                  style={{ paddingLeft: "40px", paddingRight: "40px" }}
                >
                  Add Review
                </button>
              </div>
            </div>
          ) : (
            <>
              {isCompleted === "Freeze" ? (
                <div
                  className="text-center"
                  style={{ paddingLeft: "50px", paddingRight: "50px" }}
                >
                  <div className="row">
                    <button
                      type="button"
                      onClick={handleClick}
                      class="btn btn-dark btn-lg btn-block mt-4"
                    >
                      Add Review
                    </button>

                  </div>
                  <div className="row">
                    <button
                      type="button"
                      class="btn btn-success btn-lg btn-block mt-4"
                      onClick={popUpHandler}
                    >
                      Freez Time Extention
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="text-center"
                  style={{ paddingLeft: "50px", paddingRight: "50px" }}
                >
                  <div className="row">
                    <button
                      type="button"
                      class="btn btn-dark btn-lg btn-block mt-4"
                    >
                      Add Review
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BookingButtons;

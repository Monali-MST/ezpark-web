import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";
import "./SlotSelect.css";
import { SignUpContext } from "../../App";

function SlotSelect() {
  const [pageNo,setPageNo,dataSet,SetDataSet,startDate,setStartDate,endDate,SetendDate,startTime,setStartTime,endTime,setEndTime] = useContext(SignUpContext);
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

  const [startDateValue, setStartDateValue] = useState(today);
  const [endDateValue,setEndDateValue] = useState(today);
  const [startTimeValue, setStartTimeValue] = useState(time);
  const [endTimeValue, setEndTimeValue] = useState(time);
  const navigate = useNavigate();

  const handleClick = (event) => {
      event.preventDefault();
      
      if(startDateValue === today && startTimeValue === time){
        alert("need to add more time")
      }
      else if(startTimeValue > endTimeValue){
        alert("end time not valid")
      }
      else if(startDateValue === today && startTimeValue < time){
        alert("Time not valide")

      }else if(endDateValue === today && endTimeValue < time){
        alert("Time not valide")

      }
      else{
        setStartDate(startDateValue);
        SetendDate(endDateValue);
        setStartTime(startTimeValue);
        setEndTime(endTimeValue);
        navigate("/booking");
      }
  }

  return (

    <>
      <Header />
      <div className="row col-12">
        <div className="col-4 col-lg-2 col-md-2 col-sm-8">
          <Sidebar />
        </div>

        <div className="col-8 col-lg-10 col-md-10 col-sm-8 " style={{ paddingRight: "65px" }}>
          <div className="row">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{ flex: 1, height: "2px", backgroundColor: "black" }}
              ></div>

              <div>
                <h4 className="text-center" style={{ padding: "15px" }}>
                  <b>Select Your Date and Time</b>
                </h4>
              </div>

              <div
                style={{ flex: 1, height: "2px", backgroundColor: "black" }}
              ></div>
            </div>
          </div>
        <div style={{paddingLeft:"50px",paddingRight:"50px"}}>
          <div className="row allwraper">
            <h5 className="text-center pb-2"><b>From</b></h5>
            <div className="col">
              <div className="float-end w-50 pickerwraper">
                <DatePicker selected={startDateValue} minDate={new Date()} onChange={(date) => setStartDateValue(date)} className="datepikerstyle"/>
              </div>
              
            </div>
            <div className="col">
            <div className="float-start w-50 pickerwraper">
              <TimePicker onChange={setStartTimeValue} value={startTimeValue} name="test" className="timepikerstyle"/>
            </div>
            </div>
            <h5 className="text-center pb-2 pt-5"><b>To</b></h5>
            <div className="col"> 
              <div className="float-end w-50 pickerwraper">
                <DatePicker selected={endDateValue} minDate={new Date(startDateValue)} onChange={(date) => setEndDateValue(date)} className="datepikerstyle"/>
              </div>
              
            </div>
            <div className="col">
            <div className="float-start w-50 pickerwraper">
              <TimePicker onChange={setEndTimeValue} value={endTimeValue} className="timepikerstyle"/>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="row col-12">
        <div className="col align-self-end">
        <button className="btn btn-lg btn-warning float-end" style={{color:"red",border:"2px solid black",borderRadius:"20px"}} onClick={handleClick}><b>Book Now</b></button>  
        </div>
         
      </div>
    </>
  );
}
export default SlotSelect;

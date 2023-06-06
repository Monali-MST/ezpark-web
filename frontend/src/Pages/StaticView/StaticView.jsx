import React from "react";
import "./StaticView.css";
import BookedSlots from "./BookedSlots";
import AvailableSlots from "./AvailableSlots";
import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";

import DropDownBC from "./DropDownBC";
import DropDownTR from "./DropDownTR";
import DropDownRM from "./DropDownRM";

import DateRangePicker from "./ReportGenerator";
import CarIcon from "./../../Assets/car_side.png";
import ToggleIcon from "./../../Assets/toggle.png";


const StaticView = () => {
    return (
        <section>
            <div className="stacticv-top">
                {/* booked slot count box*/}
                <div className="booked-slots-container"> 
                    <div className="booked-slots-contain2">
                        <div className="booked-slots-icon"> 
                            <img src={CarIcon} style={{width:70, marginLeft:20,marginTop:20}}/>
                        </div>
                        <div className="booked-slots-num"> 
                            <BookedSlots/>
                        </div>
                    </div>
                    
                    <div className="booked-slots"> 
                        Booked Slots  
                    </div>
                </div>

                 {/* available slot count box */}
                <div className="available-slots-container">
                    <div className="available-slot-contain2">
                        <div className="available-slots-icon"> 
                        <img src={ToggleIcon} style={{width:70, marginLeft:20,marginTop:20}}/>
                        </div>
                        <div className="available-slots-num"> 
                            <AvailableSlots/>
                        </div>
                    </div>
                    
                    <div className="available-slots"> 
                        Available Slots  
                    </div>
                </div>

                 {/* current date and time box */}
                <div className="date-time-container">
                    
                        <div className="date-time-date"> 
                            Date:
                        </div>
                        <div className="date-time-dnum"> 
                           <CurrentDate />
                        </div>
                    
                        <div className="date-time-time"> 
                            Time:
                        </div>
                        <div className="date-time-tnum"> 
                           <CurrentTime />
                        </div>                 
                </div>
            </div>

             {/* Chart drop downs... */}
            <div className="booking-and-cancel"><DropDownBC/></div>
            <div className="total-revenue"><DropDownTR/></div>
            <div className="refund"><DropDownRM/></div>

            <div className= "report-generator"><DateRangePicker/></div>
           

        </section>

   
    );
  };
  
  export default StaticView;
  
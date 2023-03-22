import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import axios from "axios";


function BarFunctionD(){
  var [userData, setUserData] = useState([]);
  useEffect(()=>{
    axios
      .get("http://localhost:8800/bookingDaily")
      .then(response =>{
        setUserData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const chartData={
    labels: ["Bookings","Cancelations"],
    datasets:[{
      label: ["Bookings"],
      data: [userData.Booking, userData.Cancellation],
      backgroundColor: [ "black", "#FAA41E "],
    }]
  }


  return(
    <div>
      <div style={{width:700}}>
      <BarChart chartData={chartData}/>
      </div>
    </div>
  );
}
export default BarFunctionD;

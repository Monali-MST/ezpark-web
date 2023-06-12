//monthly bookings and cancellations...

import { useEffect, useState } from "react";
import DoughnutChart from "./DoughnutChart";
import axios from "axios";

function DoughnutFunctionM(){
    var [userData, setUserData] = useState([]);
    useEffect(()=>{
      axios
        .get("http://localhost:8800/bookingMonthly")
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
        //label: ["Bookings","Cancelations"],
        data: [userData.Booking, userData.Cancellation],
        backgroundColor: [ "black", "#FAA41E "],
        borderColot:["black","#FAA41E " ]
      }]
    }
    
    const chartOption={

    }
  
    return(
      <div>
        <div style={{width:240, height:240}}>
        <DoughnutChart chartData={chartData} chartOption={chartOption}/>
        </div>
      </div>
    );
  }
  export default DoughnutFunctionM;
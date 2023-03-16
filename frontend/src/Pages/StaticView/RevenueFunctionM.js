import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import axios from "axios";

function RevenueFunctionM(){
  
  var [userData, setUserData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8800/revenueMonthly")
    .then(response =>{
      setUserData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const chartData={
    labels: userData.map((data)=>data.PaymentDate),
    datasets:[{
      label: "Total Revenue",
      data: userData.map((data)=> data.TotalRevenueMonthly),
      backgroundColor:"#DE8B09",
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
export default RevenueFunctionM;
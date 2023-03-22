import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import axios from "axios";

function RevenueFunctionW(){
  
  var [userData, setUserData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8800/revenueWeekly")
    .then(response =>{
      setUserData(response.data);
    })
    .catch(error => {
      console.log(error);  
        });
  }, []);

  const chartData={
    labels: userData.map((data)=>(data.PaymentDate).substr(0,9)+(parseInt((data.PaymentDate).charAt(9))+1).toString()),
    datasets:[{
      label: "Total Revenue",
      data: userData.map((data)=> data.TotalRevenueWeekly),
      backgroundColor:"#face8a",
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
export default RevenueFunctionW;
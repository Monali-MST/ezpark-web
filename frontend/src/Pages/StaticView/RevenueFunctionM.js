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
    labels: userData.map((data)=>(data.PaymentDate).substr(0,9)+(parseInt((data.PaymentDate).charAt(9))+1).toString()),
    datasets:[{
      label: "Total Revenue",
      data: userData.map((data)=> data.TotalRevenueMonthly),
      backgroundColor:"#E7AD52", //better color
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
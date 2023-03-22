import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import axios from "axios";

function RevenueFunctionD(){
  
  var [userData, setUserData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8800/revenueDaily")
    .then(response =>{
      setUserData(response.data);
    })
    .catch(error => {          
      console.log(error);
    });
  }, []);

  const chartData={
    labels: userData.map((data) => {
      const paymentDate = data.PaymentDate;
      if (paymentDate) {
        return paymentDate.substr(0, 9) + (parseInt(paymentDate.charAt(9)) + 1).toString();
      }
      return '';
    }),
    datasets:[{
      label: "Total Revenue",
      data: userData.map((data)=> data.TotalRevenueDaily),
      backgroundColor:"#f8ba59",
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
export default RevenueFunctionD;
import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import axios from "axios";

function RefundFPFunctionW(){
  
  var [userData, setUserData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8800/refundFPWeekly")
    .then(response =>{
      setUserData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const chartData={
    labels: userData.map((data) => {
      const refundDate = data.RefundDate;
      if (refundDate) {
        const date = new Date(refundDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      }
      return '';
    }),
    datasets:[{
      label: "Full Refunds",
      data: userData.map((data)=> data.TotalFullRefunds),
      backgroundColor:"#E7AD52", //better color
    },
    {
        label: "Parital Refunds",
        data: userData.map((data)=> data.TotalPartialRefunds),
        backgroundColor:"black", 
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
export default RefundFPFunctionW;
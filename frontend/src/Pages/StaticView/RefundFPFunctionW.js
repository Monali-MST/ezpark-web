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
    labels: userData.map((data)=>(data.RefundDate).substr(0,9)+(parseInt((data.RefundDate).charAt(9))+1).toString()),
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
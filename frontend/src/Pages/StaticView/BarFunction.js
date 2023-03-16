import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import axios from "axios";


function BarFunction(){
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
      label: ["Bookings","Cancelations"],
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
export default BarFunction;



// import { useEffect, useState } from "react";
// import BarChart from "./BarChart";
// import axios from "axios";

// var i=null;

// function BarFunction(){
  
//   var [userData, setUserData] = useState([]);
//   useEffect(()=>{
//     axios.get("http://localhost:8800/Test")
//     .then(response =>{
//       setUserData(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }, []);

//   const chartData={
//     labels: userData.map((data)=>data.year),
//     datasets:[{
//       label: "User Gain",
//       data: userData.map((data)=> data.userGain),
//     }]
//   }


//   return(
//     <div>
//       <div style={{width:700}}>
//       <BarChart chartData={chartData}/>
//       </div>
//     </div>
//   );
// }
// export default BarFunction;
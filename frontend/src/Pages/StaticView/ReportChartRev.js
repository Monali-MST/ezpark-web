// import { useEffect, useState } from "react";
// import BarChart from "./BarChart";
// import axios from "axios";

// function ReportChartRev(){
//     var [userData, setUserData] = useState([]);
//   useEffect(()=>{
//     axios.post("http://localhost:8800/reportRevenueFetch")
//     .then(response =>{
//       setUserData(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }, []);

//   const chartData={
//     labels: userData.map((data) => {
//       const paymentDate = data.PaymentDate;
//       if (paymentDate) {
//         console.log(paymentDate);
//         const date = new Date(paymentDate);
//         const year = date.getFullYear();
//         const month = date.getMonth() + 1;
//         const day = date.getDate();
//         return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
//       }
//       return '';
//     }),
    
//     datasets:[{
//       label: "Total Revenue",
//       data: userData.map((data)=> data.TotalRevenue),
//       backgroundColor:"#E7AD52", //better color
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
// export default ReportChartRev;
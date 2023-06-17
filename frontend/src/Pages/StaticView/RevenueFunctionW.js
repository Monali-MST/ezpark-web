import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import axios from "axios";

function RevenueFunctionW() {

  var [revenueData, setRevenueData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8800/revenueWeekly")
      .then(response => {
        setRevenueData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const chartData = {
    labels: revenueData.map((data) => {
      const paymentDate = data.PaymentDate;
      if (paymentDate) {
        const date = new Date(paymentDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      }
      return '';
    }),

    datasets: [{
      label: "Total Revenue",
      data: revenueData.map((data) => data.TotalRevenueWeekly),
      backgroundColor: "#face8a",
    }]
  }


  return (
    <div>
      <div style={{ width: 400, height: 400 }}>
        <BarChart chartData={chartData} />
      </div>
    </div>
  );
}
export default RevenueFunctionW;
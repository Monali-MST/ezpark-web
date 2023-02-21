import { useState } from "react";
import BarChart from "./BarChart";
import {UserData} from "./Data";

function BarFunction() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data)=>data.year),
    datasets:[{
      label: "Bookings and Cancellations",
      data: UserData.map((data)=> data.userGain),

    }]
  })
  return (
    <div>
      <div style={{width:700}}>
      <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default BarFunction;

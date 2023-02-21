import React , { useState, useEffect }  from "react";
import axios from "axios";

function Data() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8800/bookingMonthly')
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  const [myVariable, setMyVariable] = useState([]);
  const [myArray, setMyArray] = useState ([]);

  useEffect(() => {
    async function fetchMyVariable() {
      const response = await axios.get('http://localhost:8800/booking3');
      setMyVariable(response.data);
    }
    fetchMyVariable();
  }, []);

  useEffect(() => {
    if (myVariable) {
      // Convert the backend variable to an array and store it in state
      const newArray = Object.values(myVariable);
      setMyArray(newArray);
    }
  }, [myVariable]);

   return (
    <div>
      {myArray.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export const UserData = [
    {
        id: 1,
        year: "Bookings",
        userGain: data.map((item) =>item.value),
        },

      {
        id: 2,
        year: "Booking cancellations",
        userGain: 3,
      },
      
];

//Counting the booked slots that are not disabed

import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function BookedSlots() {
  const [bookedSlots, setBookedSlots] = useState(null);

  useEffect(() => {
    // Function to fetch booked slots from the backend
    const fetchBookedSlots = () => {
      const date = moment().format('YYYY-MM-DD');
      const currentTime = new Date().toLocaleTimeString([], { hour12: false });
      console.log(date);
      console.log(currentTime);
      axios.post("http://localhost:8800/bookedSlots", { "date": date, "currentTime": currentTime })
        .then(response => {
          setBookedSlots(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    };

    const interval = setInterval(() => {
      fetchBookedSlots();
    }, 6000)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {bookedSlots !== null ? <p>{bookedSlots}</p> : <p className="b-a-loading" >Loading...</p>}
    </div>
  );
}

export default BookedSlots;









import React, { useState, useEffect } from "react";
import axios from "axios";

function BookedSlots() {
  const [bookedSlots, setBookedSlots] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8800/bookedSlots")
      .then(response => {
        setBookedSlots(response.data.bookedSlots);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {bookedSlots !== null ? <p> {bookedSlots}</p> : <p>Loading...</p>}
    </div>
  );
}

export default BookedSlots;

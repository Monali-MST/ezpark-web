//count available slots which are not disabled...

import React, { useState, useEffect } from "react";
import axios from "axios";

function AvailableSlots() {
  const [availableSlots, setAvailableSlots] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8800/availableSlots")
      .then(response => {
        setAvailableSlots(response.data.availableSlots);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {availableSlots !== null ? <p> {availableSlots}</p> : <p>Loading...</p>}
    </div>
  );
}

export default AvailableSlots;

//count booked slots which are not disabled...
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function BookedSlots() {
  const [bookedSlots, setBookedSlots] = useState(null);
  // const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to fetch booked slots from the backend
    const fetchBookedSlots = () => {
      const date = moment().format('YYYY-MM-DD');
      const currentTime = new Date().toLocaleTimeString([], { hour12: false });
      console.log(date);
      console.log(currentTime);
      axios.post("http://localhost:8800/bookedSlots",  {"date": date, "currentTime": currentTime})
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
     
    // Clean up the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {bookedSlots !== null ? <p>{bookedSlots}</p> : <p>Loading...</p>}
    </div>
  );
}

export default BookedSlots;









// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function BookedSlots() {
//   const [bookedSlots, setBookedSlots] = useState(null);

//   // const [currTime, setCurrTime] = useState({
//   //   currentTime: ""
//   // })

//   useEffect(() => {
//     axios.get("http://localhost:8800/bookedSlots")
//       .then(response => {
//         setBookedSlots(response.data.bookedSlots);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       {bookedSlots !== null ? <p> {bookedSlots}</p> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default BookedSlots;

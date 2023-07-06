//Counting the available slots that are not disabed

import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../../Service/Server_con";

function AvailableSlots() {
  const [availableSlots, setAvailableSlots] = useState(null);

  useEffect(() => {
    setTimeout(()=>{
      axios.post(server + "availableSlots")
      .then(response => {
        setAvailableSlots(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    },8000);
       
  }, []);

  return (
    <div>
      {availableSlots !== null ? <p> {availableSlots}</p> : <p className="b-a-loading">Loading...</p>}
    </div>
  );
}

export default AvailableSlots;





// //Counting the available slots that are not disabed

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { server } from "../../Service/Server_con";

// function AvailableSlots() {
//   const [availableSlots, setAvailableSlots] = useState(null);

//   useEffect(() => {
//     // axios.post("http://localhost:8800/availableSlots")
//     axios.post(server + "availableSlots")
//       .then(response => {
//         setAvailableSlots(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       {availableSlots !== null ? <p> {availableSlots}</p> : <p className="b-a-loading">Loading...</p>}
//     </div>
//   );
// }

// export default AvailableSlots;



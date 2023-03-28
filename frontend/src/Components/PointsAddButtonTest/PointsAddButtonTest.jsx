// import React, { useEffect ,useState } from "react";
// import axios from "axios";
// // import { useLocation } from "react-router-dom";

// const PointsAddButtonTest = () => {

//     const [pointActions, setpointActions] = useState([]);
//     useEffect(() => {
//       const fetchAllPoints = async () => {
//         try {
//           const res = await axios.get("http://localhost:8800/pointsadd");
//           setpointActions(res.data);
//         } catch (err) {
//           console.log(err);
//         }
//       };
//       fetchAllPoints();
//     }, []);
  
  
//     // const location = useLocation();
//     // const userId = location.pathname.split("/")[2];
//     const userId = 1;            // should change..........
//     const [addingPoints, setPoints] = useState({
//       addPoints: 3,              // should change..........
//       currentPoints: 10,         // should change..........
//     });
  
//     // setPoints()
  
//     const handlecheckbutton = async (e) => {
//       e.preventDefault();
//       try {
//         await axios.put("http://localhost:8800/pointsadd" + userId, addingPoints);
//         console.log("tring update")
//         console.log(addingPoints)
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     return (
//       <div>
//         <div className="description-title">
//           <h1>point increment app</h1>
//         </div>
//         <div className="pointAction">
//           {pointActions.map((pointAction, iduser_details) => (
//             <div key={pointAction.iduser_details}>
//               <div>
//                 <h4>{pointAction.iduser_details} :-</h4>
//                 <h3>{pointAction.noofpoints} Points</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button onClick={handlecheckbutton}>add points</button>
//       </div>
//     );
//   };
  
// export default PointsAddButtonTest

import React from 'react'

const PointsAddButtonTest = () => {
  return (
    <div>
      
    </div>
  )
}

export default PointsAddButtonTest

// export const UserData = [
//     {
//         id: 1,
//         year: 2016,
//         userGain: 80000,
//         userLost: 823,
//       },
//       {
//         id: 2,
//         year: 2017,
//         userGain: 45677,
//         userLost: 345,
//       },
//       {
//         id: 3,
//         year: 2018,
//         userGain: 78888,
//         userLost: 555,
//       },
//       {
//         id: 4,
//         year: 2019,
//         userGain: 90000,
//         userLost: 4555,
//       },
//       {
//         id: 5,
//         year: 2020,
//         userGain: 4300,
//         userLost: 234,
//       },
// ];

// function Table(){
//     return(
//       <div class name = "Table">
//         <table style={{border: 2,  width: 800,  height: 200}}>
//           <tr>
//             <th>id</th>
//             <th>year</th>
//             <th>userGain</th>
//           </tr>
//           {UserData.map((val,key)=>{
//             return(
//               <tr  key={key}>
//                 <td>{val.id}</td>
//                 <td>{val.year}</td>
//                 <td>{val.userGain}</td>
//               </tr>
//             )
//           })}
//         </table>
//       </div>
//     );
//   }
  
//   export default Table;

global.globalBookedSlots = 0;

var connection = require('../../../service/connection');
const statQuery = require('../stat_sql/stat_sql');

module.exports = function stat_booked_slots(req, res) {
  const currentTime = req.body.currentTime;
  const date = req.body.date;

  const valuesB = [date, currentTime, currentTime];

  connection.query(statQuery.bookedSlots, valuesB, (errorBS, resultsBS) => {
    if (errorBS) {
      console.log(errorBS);

    } else if (resultsBS != 0) {
      globalBookedSlots = resultsBS[0].bookedSlots;
      return res.json(globalBookedSlots);
    } else {
      return res.json(0);
    }
  });
};






// global.globalBookedSlots=0;

// var connection = require('../../../service/connection');
// //const statQuery = require ('../stat_sql/stat_sql');
//   module.exports = function stat_booked_slots(req, res) {
//     const currentTime = req.body.currentTime;
//     const date = req.body.date;


//     const queryBS =  "SELECT COUNT(BookingID) as bookedSlots FROM ezpark.booking WHERE BookedDate=(?) AND  (StartTime<= (?) AND EndTime >=(?));";
//     const valuesB = [date, currentTime, currentTime];

//     connection.query(queryBS, valuesB, (errorBS, resultsBS) => {
//       if(errorBS){
//         console.log(errorBS);

//       }else if(resultsBS!=0){
//         globalBookedSlots =resultsBS[0].bookedSlots;
//         return res.json(globalBookedSlots);
//       }else{
//         return res.json(0);
//       }
//     });
//   };









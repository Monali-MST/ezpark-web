global.globalBookedSlots=0;

var connection = require('../../../service/connection');
  module.exports = function stat_booked_slots(req, res) {
    const currentTime = req.body.currentTime;
    const date = req.body.date;
   
    // const queryBS = "SELECT b.slot FROM ezpark.booking AS b JOIN ezpark.slot AS s ON b.slot = s.slot_id WHERE b.BookedDate = DATE(NOW()) AND b.StartTime <= (?) AND b.EndTime >= (?) AND s.Enability = 1;";
    const queryBS =  "SELECT COUNT(BookingID) as bookedSlots FROM ezpark.booking WHERE BookedDate=(?) AND  (StartTime<= (?) AND EndTime >=(?));";
    const valuesB = [date, currentTime, currentTime];

    connection.query(queryBS, valuesB, (errorBS, resultsBS) => {
      if(errorBS){
        console.log(errorBS);
        // return res.json(errorBS);
      }else if(resultsBS!=0){
        globalBookedSlots =resultsBS[0].bookedSlots;
        return res.json(globalBookedSlots);
      }else{
        return res.json(0);
      }
    });
  };















// var connection = require('../../../service/connection');

// module.exports = async function stat_booked_slots(req, res){
//     const queryBS= "SELECT * FROM slot WHERE availability=0 AND Enability=1;"
//     let bookedSlots;
//     connection.query(queryBS,(errorBS, resultsBS)=>{
//       if(errorBS)return res.json(errorBS);
//       bookedSlots = 0;
//       resultsBS.forEach(row1=>{
//         bookedSlots++;
//       });
//       return res.json({ bookedSlots });
//     });
//   }



//================================================
    

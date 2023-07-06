//counting the slots that are available at this moment
var connection = require('../../../service/connection');
const statQuery = require ('../stat_sql/stat_sql');

module.exports = function stat_available_slots(req, res) {

  var valueAS = 0;
  connection.query(statQuery.availableSlots, (errorAS, resultsAS) => {
    if (errorAS) {
      console.log(errorAS);

    } else if (resultsAS != 0) {
      valueAS = resultsAS[0].availableSlots;
      valueAS = valueAS - globalBookedSlots;
      return res.json(valueAS);

    } else {
      return res.json(0);
    }
  });
};





// var connection = require('../../../service/connection');

// module.exports = function stat_available_slots(req, res) {

//   const queryAS = "SELECT count(slot_id) AS availableSlots FROM ezpark.slot WHERE Enability=1;";
//   var valueAS = 0;


//   connection.query(queryAS, (errorAS, resultsAS) => {
//     if (errorAS) {
//       console.log(errorAS);

//     } else if (resultsAS != 0) {
//       valueAS = resultsAS[0].availableSlots;
//       valueAS = valueAS - globalBookedSlots;
//       return res.json(valueAS);

//     } else {
//       return res.json(0);
//     }
//   });
// };
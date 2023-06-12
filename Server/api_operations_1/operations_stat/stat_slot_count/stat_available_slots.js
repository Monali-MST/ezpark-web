var connection = require('../../../service/connection');


// module.exports = async function stat_available_slots(req, res){
//         const queryAS= "SELECT * FROM slot WHERE availability=1 AND Enability = 1;"
//         let availableSlots;
//         connection.query(queryAS,(errorAS, resultsAS)=>{
//           if(errorAS)return res.json(errorAS);
//           availableSlots = 0;
//           resultsAS.forEach(row1=>{
//             availableSlots++;
//           });
//           res.json({ availableSlots });
//         });
//     }

//------------------------------------------
var connection = require('../../../service/connection');
  module.exports = function stat_available_slots(req, res) {
   
    const queryAS = "SELECT count(slot_id) AS availableSlots FROM ezpark.slot WHERE Enability=1;";
    var valueAS =0;
    

    connection.query(queryAS, (errorAS, resultsAS) => {
      if(errorAS){
        console.log(errorAS);
        // return res.json(errorBS);
      }else if(resultsAS!=0){
        valueAS =resultsAS[0].availableSlots;
        valueAS = valueAS - globalBookedSlots;
        //console.log(valueAS);
        return res.json(valueAS);
      }else{
        return res.json(0);
      }
    });
  };

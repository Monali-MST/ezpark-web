var connection = require('../../../service/connection');

module.exports = async function stat_available_slots(req, res){
        const queryAS= "SELECT * FROM slot WHERE availability=1 AND Enability = 1;"
        let availableSlots;
        connection.query(queryAS,(errorAS, resultsAS)=>{
          if(errorAS)return res.json(errorAS);
          availableSlots = 0;
          resultsAS.forEach(row1=>{
            availableSlots++;
          });
          res.json({ availableSlots });
        });
    }
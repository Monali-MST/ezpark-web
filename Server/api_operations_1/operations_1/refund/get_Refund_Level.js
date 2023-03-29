var connection = require('../../../service/connection')

module.exports =async function get_Refund_Level(req , res){

    const q = "SELECT * FROM Refund_Level;";
    connection.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });

}
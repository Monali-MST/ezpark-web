var connection = require('../../../service/connection')

module.exports =async function get_pointActions(req , res){

    const q = "SELECT * FROM Point_Details;";
    connection.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });

}
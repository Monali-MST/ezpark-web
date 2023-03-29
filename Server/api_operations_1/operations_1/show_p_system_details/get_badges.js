var connection = require('../../../service/connection')

module.exports =async function get_badges(req , res){

    const q = "SELECT * FROM Badge_Details;";
    connection.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
}
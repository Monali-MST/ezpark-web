var connection = require('../../../service/connection')

module.exports =async function get_discounts(req , res){

    const q = "SELECT * FROM Discounts_Details;";
    connection.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });

}
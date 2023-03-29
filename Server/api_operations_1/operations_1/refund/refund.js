//1. need to calculate the refund amount using refund_levels. if duration 7-5 then 100%. if duration 5-3 then 50%. if duration 3-1 then 0% .
//2. need to code here, for refund using stripe 

function getRandomArbitrary(min, max) {
    //for testing purpose
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function calculate_duration(booked_date, canceled_date) {
    return getRandomArbitrary(1, 7);   //for testing purpose
  }
  
  function calculate_refund_amount(amount, duration) {
    if (duration > 5) return amount;
    else if (duration > 3) return amount / 2;
    else return 0;
  }
  
  module.exports = async function send_refund_request(req, res) {
    const data = req.body;
    const booked_date = data.booked_date;
    const canceled_date = data.canceled_date;
    var amount = 1000;
  
    const duration = calculate_duration(booked_date, canceled_date);
    const refund_amount = calculate_refund_amount(amount, duration);
  
    if (refund_amount != 0) {
      var sql = "";
      // connection.query(sql, function (err, result, fields) {
      //     if (err) res.send(err);
      //     console.log(result)
      //     res.json("Refund Successful")
      //     })
      res.json("Refund Successful");
    }
    {
      res.json("Need to contact Admin");
    }
  };
  
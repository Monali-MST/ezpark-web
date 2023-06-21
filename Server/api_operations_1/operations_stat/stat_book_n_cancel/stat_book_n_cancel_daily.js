// 

var connection = require('../../../service/connection');
const statQuery = require ('../stat_sql/stat_sql');

module.exports = async function stat_book_n_cancel_daily(req, res) {
  let Booking, Cancellation;
  connection.query(statQuery.bookingDaily, (error1, results1) => {
    if (error1) return res.json(error1);

    Booking = 0;
    results1.forEach(row1 => {
      Booking++;
    });

    connection.query(statQuery.cancelDaily, (error2, results2) => {
      if (error2) return res.json(error2);

      Cancellation = 0;
      results2.forEach(row2 => {
        Cancellation++;
      });
      res.json({ Booking, Cancellation });
    });
  });
}

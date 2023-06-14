var connection = require('../../../service/connection');

module.exports = async function stat_book_n_cancel_daily(req, res) {
  const query1 = "SELECT *FROM Booking WHERE BookedDate=date (now()) ;";
  const query2 = "SELECT * FROM BookingCancellation WHERE CancelDate=date (now()) ;";
  let Booking, Cancellation;
  connection.query(query1, (error1, results1) => {
    if (error1) return res.json(error1);

    Booking = 0;
    results1.forEach(row1 => {
      Booking++;
    });

    connection.query(query2, (error2, results2) => {
      if (error2) return res.json(error2);

      Cancellation = 0;
      results2.forEach(row2 => {
        Cancellation++;
      });
      res.json({ Booking, Cancellation });
    });
  });
}

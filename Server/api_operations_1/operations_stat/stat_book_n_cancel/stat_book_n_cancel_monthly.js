var connection = require('../../../service/connection');

module.exports = async function stat_book_n_cancel_montly(req, res) {
  const query1 = "SELECT * FROM Booking WHERE MONTH(BookedDate)=MONTH(now());";
  const query2 = "SELECT * FROM BookingCancellation Where month(CancelDate)=month(now());";
  let Booking, Cancellation;

  connection.query(query1, (error1, results1, fields1) => {
    if (error1) return res.json(error1);
    Booking = 0;
    results1.forEach(row1 => {
      Booking++;
    });

    connection.query(query2, (error2, results2, fields2) => {
      if (error2) return res.json(error2);
      Cancellation = 0;
      results2.forEach(row2 => {
        Cancellation++;
      });

      res.json({ Booking, Cancellation });
    });
  });
}

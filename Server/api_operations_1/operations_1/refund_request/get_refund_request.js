//   need to code here for a retriving refund requests from database( show in admin panal)

var connection = require("../../../service/connection");

module.exports = async function get_refund_request(req, res) {
  const q =
    "SELECT Refund_Request.Refund_Request_id, Refund_Request.Reason, Refund_Request.Requested_date, Refund_Request.Booking_id, Payment_Details.PaymentAmount FROM Payment_Details JOIN Booking ON Payment_Details.Booking_id = Booking.BookingID JOIN Refund_Request ON Booking.BookingID = Refund_Request.Booking_id;";
  connection.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

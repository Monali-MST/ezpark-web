// var connection = require('../../../service/connection');

// module.exports = async function stat_refundFP_daily(req, res) {
//   const queryRFPD = "SELECT rd.RefundDate, COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds, COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds FROM Refund_Details rd LEFT JOIN (SELECT DATE(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalFullRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate = DATE(NOW()) AND Refund_percentage = 100 GROUP BY DATE(RefundDate), Refund_Details.Refund_level_id) full ON rd.RefundDate = full.RefundDate LEFT JOIN (SELECT DATE(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalPartialRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate = DATE(NOW()) AND Refund_percentage = 50 GROUP BY DATE(RefundDate), Refund_Details.Refund_level_id) partial ON rd.RefundDate = partial.RefundDate WHERE rd.RefundDate = DATE(NOW()) GROUP BY rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds;";
//   connection.query(queryRFPD, (error, results, fields) => {
//     if (error) return res.json(error)
//     const rows = results.map(row => {
//       const RefundDData = {};
//       fields.forEach(field => {
//         RefundDData[field.name] = row[field.name];
//       });
//       return RefundDData;
//     });

//     return res.json(rows);
//   });
// }

var connection = require('../../../service/connection');
const statQuery = require('../stat_sql/stat_sql');

module.exports = async function stat_refundFP_daily(req, res) {

  connection.query(statQuery.refundDaily, (error, results, fields) => {
    if (error) return res.json(error)
    const rows = results.map(row => {
      const RefundDData = {};
      fields.forEach(field => {
        RefundDData[field.name] = row[field.name];
      });
      return RefundDData;
    });

    return res.json(rows);
  });
}

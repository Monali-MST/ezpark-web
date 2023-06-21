// var connection = require('../../../service/connection');

// module.exports = async function stat_refundFP_monthly(req, res) {
//   const queryRFPM = "SELECT rd.RefundDate,COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds, COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds FROM Refund_Details rd LEFT JOIN (SELECT date(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalFullRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE MONTH(RefundDate) = MONTH(NOW()) AND Refund_percentage = 100 GROUP BY date(RefundDate)) full ON rd.RefundDate = full.RefundDate LEFT JOIN (SELECT date(RefundDate) AS RefundDate,SUM(Refund_amount) AS TotalPartialRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE MONTH(RefundDate) = MONTH(NOW()) AND Refund_percentage = 50 GROUP BY date(RefundDate)) partial ON rd.RefundDate = partial.RefundDate WHERE MONTH(rd.RefundDate) = MONTH(NOW()) GROUP BY rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds ORDER BY rd.RefundDate;";
//   connection.query(queryRFPM, (error, results, fields) => {
//     if (error) return res.json(error)
//     const rows = results.map(row => {
//       const RefundMData = {};
//       fields.forEach(field => {
//         RefundMData[field.name] = row[field.name];
//       });
//       return RefundMData;
//     });

//     return res.json(rows);
//   });
// }

var connection = require('../../../service/connection');
const statQuery = require('../stat_sql/stat_sql');

module.exports = async function stat_refundFP_monthly(req, res) {

  connection.query(statQuery.refundMonthly, (error, results, fields) => {
    if (error) return res.json(error)
    const rows = results.map(row => {
      const RefundMData = {};
      fields.forEach(field => {
        RefundMData[field.name] = row[field.name];
      });
      return RefundMData;
    });

    return res.json(rows);
  });
}
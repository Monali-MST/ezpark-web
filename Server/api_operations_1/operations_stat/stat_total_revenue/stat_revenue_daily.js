// var connection = require('../../../service/connection');

// module.exports = async function stat_revenue_daily(req, res) {
//   const queryD = "SELECT PaymentDate, SUM(PaymentAmount) AS TotalRevenueDaily FROM Payment_Details WHERE PaymentDate=date (now())GROUP BY PaymentDate;";
//   connection.query(queryD, (error, results, fields) => {
//     if (error) return res.json(error)
//     const rows = results.map(row => {
//       const RevDData = {};
//       fields.forEach(field => {
//         RevDData[field.name] = row[field.name];
//       });
//       return RevDData;
//     });

//     return res.json(rows);
//   });
// }

var connection = require('../../../service/connection');
const statQuery = require('../stat_sql/stat_sql');

module.exports = async function stat_revenue_daily(req, res) {
  
  connection.query(statQuery.revenueDaily, (error, results, fields) => {
    if (error) return res.json(error)
    const rows = results.map(row => {
      const RevDData = {};
      fields.forEach(field => {
        RevDData[field.name] = row[field.name];
      });
      return RevDData;
    });

    return res.json(rows);
  });
}


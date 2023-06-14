var connection = require('../../../service/connection');

module.exports = async function stat_revenue_monthly(req, res) {
  const queryMR = "SELECT PaymentDate,SUM(PaymentAmount) AS TotalRevenueMonthly FROM Payment_Details WHERE MONTH(PaymentDate)=MONTH(now()) GROUP BY PaymentDate ORDER BY PaymentDate;";
  connection.query(queryMR, (error, results, fields) => {
    if (error) return res.json(error)
    const rows = results.map(row => {
      const RevMData = {};
      fields.forEach(field => {
        RevMData[field.name] = row[field.name];
      });
      return RevMData;
    });
    return res.json(rows);
  });
}



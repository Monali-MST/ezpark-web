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
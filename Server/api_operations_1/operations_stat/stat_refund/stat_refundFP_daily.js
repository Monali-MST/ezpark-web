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

var connection = require('../../../service/connection');
const statQuery = require('../stat_sql/stat_sql');

module.exports = async function stat_revenue_monthly(req, res) {

  connection.query(statQuery.revenueMonthly, (error, results, fields) => {
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




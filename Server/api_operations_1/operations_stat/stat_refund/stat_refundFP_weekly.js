var connection = require('../../../service/connection');
const statQuery = require('../stat_sql/stat_sql');

module.exports = async function stat_refundFP_weekly(req, res) {
   
    connection.query(statQuery.refundWeekly, (error, results, fields) => {
        if (error) return res.json(error)
        const rows = results.map(row => {
            const RefundWData = {};
            fields.forEach(field => {
                RefundWData[field.name] = row[field.name];
            });
            return RefundWData;
        });

        return res.json(rows);
    });
}
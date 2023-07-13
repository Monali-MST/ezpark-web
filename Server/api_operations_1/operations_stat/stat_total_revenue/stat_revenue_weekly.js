var connection = require('../../../service/connection');
const statQuery = require('../stat_sql/stat_sql');

module.exports = async function stat_revenue_weekly(req, res) {
    connection.query(statQuery.revenueWeekly, (error, results, fields) => {
        if (error) return res.json(error)
        const rows = results.map(row => {
            const RevWData = {};
            fields.forEach(field => {
                //console.log(row);
                RevWData[field.name] = row[field.name];
            });
            return RevWData;
        });
        return res.json(rows);
    });
}

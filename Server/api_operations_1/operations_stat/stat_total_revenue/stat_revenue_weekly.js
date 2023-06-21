// var connection = require('../../../service/connection');

// module.exports = async function stat_revenue_weekly(req, res) {
//     const queryW = "SELECT PaymentDate, SUM(PaymentAmount) AS TotalRevenueWeekly FROM Payment_Details WHERE PaymentDate BETWEEN date (now())-6 AND date (now())+1 GROUP BY PaymentDate ORDER BY PaymentDate;";
//     connection.query(queryW, (error, results, fields) => {
//         if (error) return res.json(error)
//         const rows = results.map(row => {
//             const RevWData = {};
//             fields.forEach(field => {
//                 console.log(row);
//                 RevWData[field.name] = row[field.name];
//             });
//             return RevWData;
//         });
//         return res.json(rows);
//     });
// }

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


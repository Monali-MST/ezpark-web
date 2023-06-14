var connection = require('../../../service/connection');

module.exports = async function stat_refundFP_weekly(req, res) {
    const queryRFPW = "SELECT rd.RefundDate, COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds, COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds FROM Refund_Details rd LEFT JOIN (SELECT date(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalFullRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate BETWEEN date (now())-6 AND date (now()) AND Refund_percentage = 100 GROUP BY date(RefundDate)) full ON rd.RefundDate = full.RefundDate LEFT JOIN (SELECT date(RefundDate) AS RefundDate,SUM(Refund_amount) AS TotalPartialRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate BETWEEN date (now())-6 AND date (now()) AND Refund_percentage = 50 GROUP BY date(RefundDate)) partial ON rd.RefundDate = partial.RefundDate WHERE rd.RefundDate BETWEEN date (now())-6 AND date (now()) GROUP BY rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds ORDER BY rd.RefundDate;";
    connection.query(queryRFPW, (error, results, fields) => {
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
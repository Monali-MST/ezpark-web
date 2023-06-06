const connection = require('D:/SW Project/Ez Park Web Clone/ezpark-web/Server/service/connection');

module.exports = async function fetchTotalRefund(req, res) {
    const query = 'SELECT rd.RefundDate,COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds, COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds FROM Refund_Details rd LEFT JOIN (SELECT date(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalFullRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate BETWEEN (?) AND (?)  AND Refund_percentage = 100 GROUP BY date(RefundDate)) full ON rd.RefundDate = full.RefundDate LEFT JOIN (SELECT date(RefundDate) AS RefundDate,SUM(Refund_amount) AS TotalPartialRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate BETWEEN (?) AND (?) AND Refund_percentage = 50 GROUP BY date(RefundDate)) partial ON rd.RefundDate = partial.RefundDate WHERE rd.RefundDate BETWEEN (?) AND (?) GROUP BY rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds ORDER BY rd.RefundDate';
        
    const val = [req.body.fromDate, req.body.toDate, req.body.fromDate, req.body.toDate, req.body.fromDate, req.body.toDate];
    connection.query(query, val, (err, results, fields)=>{
      if (err) {
        return res.json(err);
        //console.log(err);
      }else{
        const rows=results.map(row => {
          const RefData={};
          fields.forEach(field =>{
            RefData[field.name] = row[field.name];
          });
          return RefData;
      });
        return res.json(rows);
        
      }
    });
}


//previous code
// module.exports = async function fetchTotalRefund(req, res) {
//   const query = 'SELECT rd.RefundDate,COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds, COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds FROM Refund_Details rd LEFT JOIN (SELECT date(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalFullRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate BETWEEN (?) AND (?)  AND Refund_percentage = 100 GROUP BY date(RefundDate)) full ON rd.RefundDate = full.RefundDate LEFT JOIN (SELECT date(RefundDate) AS RefundDate,SUM(Refund_amount) AS TotalPartialRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate BETWEEN (?) AND (?) AND Refund_percentage = 50 GROUP BY date(RefundDate)) partial ON rd.RefundDate = partial.RefundDate WHERE rd.RefundDate BETWEEN (?) AND (?) GROUP BY rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds ORDER BY rd.RefundDate';
      
//   const val = [req.body.fromDate, req.body.toDate, req.body.fromDate, req.body.toDate, req.body.fromDate, req.body.toDate];
//   connection.query(query, val, (err, data)=>{
      
//       if (err) {
//         console.log(err);
//       }else{
//         console.log(data);
//         return res.json();
//       }
//     });
// }
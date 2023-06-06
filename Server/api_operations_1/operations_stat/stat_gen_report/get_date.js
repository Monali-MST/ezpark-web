const connection = require('D:/SW Project/Ez Park Web Clone/ezpark-web/Server/service/connection');


module.exports = async function fetchTotalRevenue(req, res) {
  const query = 'SELECT PaymentDate,SUM(PaymentAmount) AS TotalRevenue FROM Payment_Details WHERE PaymentDate BETWEEN (?) AND (?) GROUP BY PaymentDate ORDER BY PaymentDate';
  const val = [req.body.fromDate,req.body.toDate];
  connection.query(query, val, (err, results, fields)=>{
      if (err) {
        return res.json(err);
        //console.log(err);
      }else{
        const rows=results.map(row => {
          const RepRevData={};
          fields.forEach(field =>{
            RepRevData[field.name] = row[field.name];
          });
          return RepRevData;
      });
        return res.json(rows);
        
      }
    });
}
//previous code
// module.exports = async function fetchTotalRevenue(req, res) {
//   const query = 'SELECT PaymentDate,SUM(PaymentAmount) AS TotalRevenue FROM Payment_Details WHERE PaymentDate BETWEEN (?) AND (?) GROUP BY PaymentDate ORDER BY PaymentDate';
//   const val = [req.body.fromDate,req.body.toDate];
//   connection.query(query, val, (err, data)=>{
//       if (err) {
//         return res.json(err);
//         //console.log(err);
//       }else{
//         return res.json(data);
//         //console.log(data);
        
//       }
//     });
// }




// async function fetchTotalRefund(fromDate, toDate) {
//   try {
//     const query = 'SELECT rd.RefundDate,COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds, COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds FROM Refund_Details rd LEFT JOIN (SELECT date(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalFullRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate BETWEEN ? AND ?  AND Refund_percentage = 100 GROUP BY date(RefundDate)) full ON rd.RefundDate = full.RefundDate LEFT JOIN (SELECT date(RefundDate) AS RefundDate,SUM(Refund_amount) AS TotalPartialRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate BETWEEN ? AND ? AND Refund_percentage = 50 GROUP BY date(RefundDate)) partial ON rd.RefundDate = partial.RefundDate WHERE rd.RefundDate BETWEEN ? AND ? GROUP BY rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds ORDER BY rd.RefundDate';
    

//     const [rows] = await connection.query(query, [fromDate, toDate, fromDate, toDate, fromDate, toDate]);

//     return rows;
//   } catch (error) {
//     console.error('Error fetching total refunds:', error);
//     throw error; // Throw the error to be caught by the caller
//   }
// }
// module.exports = {
//   //fetchTotalRevenue,
//   //fetchTotalRefund,
// };

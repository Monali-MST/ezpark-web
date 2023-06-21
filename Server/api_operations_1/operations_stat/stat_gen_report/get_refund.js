// const connection = require('D:/SW Project/Ez Park Web Clone/ezpark-web/Server/service/connection');

// module.exports = {
//   fetchTotalRefund: function (fromDate, toDate) {
//     return new Promise((resolve, reject) => {
//       const query = `
//         SELECT
//           rd.RefundDate,
//           COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds,
//           COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds
//         FROM
//           Refund_Details rd
//           LEFT JOIN (
//             SELECT
//               DATE(RefundDate) AS RefundDate,
//               SUM(Refund_amount) AS TotalFullRefunds
//             FROM
//               Refund_Details
//               INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id
//             WHERE
//               RefundDate BETWEEN (?) AND (?)
//               AND Refund_percentage = 100
//             GROUP BY
//               DATE(RefundDate)
//           ) full ON rd.RefundDate = full.RefundDate
//           LEFT JOIN (
//             SELECT
//               DATE(RefundDate) AS RefundDate,
//               SUM(Refund_amount) AS TotalPartialRefunds
//             FROM
//               Refund_Details
//               INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id
//             WHERE
//               RefundDate BETWEEN (?) AND (?)
//               AND Refund_percentage = 50
//             GROUP BY
//               DATE(RefundDate)
//           ) partial ON rd.RefundDate = partial.RefundDate
//         WHERE
//           rd.RefundDate BETWEEN (?) AND (?)
//         GROUP BY
//           rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds
//         ORDER BY
//           rd.RefundDate
//       `;

//       const val = [fromDate, toDate, fromDate, toDate, fromDate, toDate];

//       connection.query(query, val, (err, results, fields) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           reject(err);
//         } else {
//           const rows = results.map(row => {
//             const RefData = {};
//             fields.forEach(field => {
//               RefData[field.name] = row[field.name];
//             });
//             return RefData;
//           });
//           resolve(rows);
//         }
//       });
//     });
//   },
// };


const statQuery = require('../stat_sql/stat_sql');
const connection = require('D:/SW Project/Ez Park Web Clone/ezpark-web/Server/service/connection');

module.exports = {
  fetchTotalRefund: function (fromDate, toDate) {
    return new Promise((resolve, reject) => {
      

      const val = [fromDate, toDate, fromDate, toDate, fromDate, toDate];

      connection.query(statQuery.getRefund, val, (err, results, fields) => {
        if (err) {
          console.error('Error executing query:', err);
          reject(err);
        } else {
          const rows = results.map(row => {
            const RefData = {};
            fields.forEach(field => {
              RefData[field.name] = row[field.name];
            });
            return RefData;
          });
          resolve(rows);
        }
      });
    });
  },
};



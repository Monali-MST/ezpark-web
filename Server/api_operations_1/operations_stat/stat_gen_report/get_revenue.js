const connection = require('D:/SW Project/Ez Park Web Clone/ezpark-web/Server/service/connection');

module.exports = {
  fetchTotalRevenue: function (fromDate, toDate) {
    return new Promise((resolve, reject) => {
      const query =
        'SELECT PaymentDate, SUM(PaymentAmount) AS TotalRevenue FROM Payment_Details WHERE PaymentDate BETWEEN (?) AND (?) GROUP BY PaymentDate ORDER BY PaymentDate';
      const val = [fromDate, toDate];
      connection.query(query, val, (err, results, fields) => {
        if (err) {
          console.error('Error executing query:', err);
          reject(err);
        } else {
          const rows = results.map((row) => {const RepRevData = {};
            fields.forEach((field) => {
              RepRevData[field.name] = row[field.name];
            });
            return RepRevData;
          });
          resolve(rows);
        }
      });
    });
  },
};

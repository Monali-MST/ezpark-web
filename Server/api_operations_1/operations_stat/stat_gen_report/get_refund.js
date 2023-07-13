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

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "ezpark-server.mysql.database.azure.com",
  user: "SuperAdmin",
  password: "ezPark@123",
  database: "ezpark",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected to Ezpark database")
});

module.exports = connection
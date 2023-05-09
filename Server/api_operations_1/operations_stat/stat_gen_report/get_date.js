var connection = require('../../../service/connection');

// Get user input dates from prompt
const start_date = prompt('Enter start date (YYYY-MM-DD):');
const end_date = prompt('Enter end date (YYYY-MM-DD):');

// Connect to the database
const connection = new sqlite3.Database('ezpark.connection');

// Execute the query with user input dates
const sql = 'SELECT * FROM Booking WHERE BookedDate BETWEEN ? AND ?';
connection.all(sql, [start_date, end_date], (err, rows) => {
  if (err) {
    console.error(err.message);
  }
  // Do something with the results
  console.log(rows);
});

// Close the connection
connection.close();

var connection = require('../../../service/connection');

module.exports = async function stat_revenue_weekly(req, res){
        const queryW="SELECT PaymentDate, (PaymentAmount) AS TotalRevenueWeekly FROM Payment_Details WHERE PaymentDate BETWEEN date (now())-6 AND date (now())+1 GROUP BY date(PaymentDate) ORDER BY date(PaymentDate);";
        connection.query(queryW, (error, results, fields) =>{
            if(error) return res.json(error)
            const rows=results.map(row => {
                const RevWData={};
                fields.forEach(field =>{
                    console.log(row);
                    RevWData[field.name] = row[field.name];
                });
                return RevWData; 
            });
            return  res.json(rows);
            });
      }

      
const statQuery = {
    //booked slots count
    bookedSlots: "SELECT COUNT(BookingID) as bookedSlots FROM ezpark.booking WHERE BookedDate=(?) AND  (StartTime<= (?) AND EndTime >=(?));",
    //count of enabled slots which are enabled
    availableSlots: "SELECT count(slot_id) AS availableSlots FROM ezpark.slot WHERE Enability=1;",

//booking and cancel starts
    //daily
    bookingDaily:"SELECT *FROM Booking WHERE BookedDate=date (now()) ;",
    cancelDaily:"SELECT * FROM BookingCancellation WHERE CancelDate=date (now()) ;",

    //weekly
    bookingWeekly :"SELECT * FROM Booking where BookedDate between adddate(now(),-7) and now();",
    cancelWeekly :"SELECT * FROM BookingCancellation where CancelDate between adddate(now(),-7) and now();",

    //monthly
    bookingMonthly :"SELECT * FROM Booking WHERE MONTH(BookedDate)=MONTH(now());",
    cancelMonthly :"SELECT * FROM BookingCancellation Where month(CancelDate)=month(now());",
    
//booking and cancel end

//total revenue start
    revenueDaily : "SELECT PaymentDate, SUM(PaymentAmount) AS TotalRevenueDaily FROM Payment_Details WHERE PaymentDate=date (now())GROUP BY PaymentDate;",
    
    revenueWeekly: "SELECT PaymentDate, SUM(PaymentAmount) AS TotalRevenueWeekly FROM Payment_Details WHERE PaymentDate BETWEEN date (now())-6 AND date (now())+1 GROUP BY PaymentDate ORDER BY PaymentDate;",
    
    revenueMonthly:"SELECT PaymentDate,SUM(PaymentAmount) AS TotalRevenueMonthly FROM Payment_Details WHERE MONTH(PaymentDate)=MONTH(now()) GROUP BY PaymentDate ORDER BY PaymentDate;",
//total revenue end
    
//refund starts
   refundDaily:"SELECT rd.RefundDate, COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds, COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds FROM Refund_Details rd LEFT JOIN (SELECT DATE(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalFullRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate = DATE(NOW()) AND Refund_percentage = 100 GROUP BY DATE(RefundDate), Refund_Details.Refund_level_id) full ON rd.RefundDate = full.RefundDate LEFT JOIN (SELECT DATE(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalPartialRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate = DATE(NOW()) AND Refund_percentage = 50 GROUP BY DATE(RefundDate), Refund_Details.Refund_level_id) partial ON rd.RefundDate = partial.RefundDate WHERE rd.RefundDate = DATE(NOW()) GROUP BY rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds;",

    refundWeekly: "SELECT rd.RefundDate, COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds, COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds FROM Refund_Details rd LEFT JOIN (SELECT date(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalFullRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate BETWEEN date (now())-6 AND date (now()) AND Refund_percentage = 100 GROUP BY date(RefundDate)) full ON rd.RefundDate = full.RefundDate LEFT JOIN (SELECT date(RefundDate) AS RefundDate,SUM(Refund_amount) AS TotalPartialRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE RefundDate BETWEEN date (now())-6 AND date (now()) AND Refund_percentage = 50 GROUP BY date(RefundDate)) partial ON rd.RefundDate = partial.RefundDate WHERE rd.RefundDate BETWEEN date (now())-6 AND date (now()) GROUP BY rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds ORDER BY rd.RefundDate;",

   refundMonthly: "SELECT rd.RefundDate,COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds, COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds FROM Refund_Details rd LEFT JOIN (SELECT date(RefundDate) AS RefundDate, SUM(Refund_amount) AS TotalFullRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE MONTH(RefundDate) = MONTH(NOW()) AND Refund_percentage = 100 GROUP BY date(RefundDate)) full ON rd.RefundDate = full.RefundDate LEFT JOIN (SELECT date(RefundDate) AS RefundDate,SUM(Refund_amount) AS TotalPartialRefunds FROM Refund_Details INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id WHERE MONTH(RefundDate) = MONTH(NOW()) AND Refund_percentage = 50 GROUP BY date(RefundDate)) partial ON rd.RefundDate = partial.RefundDate WHERE MONTH(rd.RefundDate) = MONTH(NOW()) GROUP BY rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds ORDER BY rd.RefundDate;",
//refund ends

//report revenue and refund fetching starts
    //fetch revenue
    getRevenue:'SELECT PaymentDate, SUM(PaymentAmount) AS TotalRevenue FROM Payment_Details WHERE PaymentDate BETWEEN (?) AND (?) GROUP BY PaymentDate ORDER BY PaymentDate',

    getRefund: `
        SELECT
          rd.RefundDate,
          COALESCE(full.TotalFullRefunds, 0) AS TotalFullRefunds,
          COALESCE(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds
        FROM
          Refund_Details rd
          LEFT JOIN (
            SELECT
              DATE(RefundDate) AS RefundDate,
              SUM(Refund_amount) AS TotalFullRefunds
            FROM
              Refund_Details
              INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id
            WHERE
              RefundDate BETWEEN (?) AND (?)
              AND Refund_percentage = 100
            GROUP BY
              DATE(RefundDate)
          ) full ON rd.RefundDate = full.RefundDate
          LEFT JOIN (
            SELECT
              DATE(RefundDate) AS RefundDate,
              SUM(Refund_amount) AS TotalPartialRefunds
            FROM
              Refund_Details
              INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id
            WHERE
              RefundDate BETWEEN (?) AND (?)
              AND Refund_percentage = 50
            GROUP BY
              DATE(RefundDate)
          ) partial ON rd.RefundDate = partial.RefundDate
        WHERE
          rd.RefundDate BETWEEN (?) AND (?)
        GROUP BY
          rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds
        ORDER BY
          rd.RefundDate
      `,
//report revenue and refund fetching ends

};

module.exports = statQuery;
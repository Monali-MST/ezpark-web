const statQuery = {

  //booked slots count
  bookedSlots: "SELECT COUNT(BookingID) as bookedSlots FROM ezpark.booking WHERE BookedDate=(?) AND  (StartTime<=(?) AND EndTime >=(?)) AND cancel=0;",
  //count of enabled slots which are enabled
  availableSlots: "SELECT count(slot_id) AS availableSlots FROM ezpark.slot WHERE Enability=1;",


//booking and cancel starts
  //daily
  bookingDaily:"SELECT *FROM Booking WHERE BookedDate=date (now()) AND cancel=0 ;",
  cancelDaily:"SELECT * FROM BookingCancellation WHERE CancelDate=date (now()) ;",

  //weekly
  bookingWeekly :"SELECT * FROM Booking where BookedDate between adddate(now(),-7) AND now() AND cancel = 0;",
  cancelWeekly :"SELECT * FROM BookingCancellation where CancelDate between adddate(now(),-7) and now();",

  //monthly
  bookingMonthly :"SELECT * FROM Booking WHERE MONTH(BookedDate)=MONTH(now()) AND cancel=0;",
  cancelMonthly :"SELECT * FROM BookingCancellation Where month(CancelDate)=month(now());",
  
//booking and cancel end


//total revenue start
  revenueDaily : "SELECT p.PaymentDate, SUM(p.PaymentAmount - COALESCE(r.Refund_amount,0)) AS TotalRevenueDaily FROM payment_details p LEFT JOIN refund_details r ON p.Booking_id= r.Booking_id WHERE p.PaymentDate=date (now()) GROUP BY p.PaymentDate;",
  
  revenueWeekly: "SELECT p.PaymentDate, SUM(p.PaymentAmount - COALESCE(r.Refund_amount, 0)) AS TotalRevenueWeekly FROM payment_details p LEFT JOIN refund_details r ON p.Booking_id=r.Booking_id WHERE p.PaymentDate BETWEEN date(now())-6 AND date(now())+1 GROUP BY p.PaymentDate ORDER BY p.PaymentDate;",
  
  revenueMonthly:"SELECT p.PaymentDate, SUM(p.PaymentAmount - COALESCE(r.Refund_amount,0)) AS TotalRevenueMonthly FROM payment_details p LEFT JOIN refund_details r ON p.Booking_id = r.Booking_id WHERE MONTH(p.PaymentDate)=MONTH(now()) GROUP BY p.PaymentDate ORDER BY p.PaymentDate;",
//total revenue end
  

//refund starts
 refundDaily:
      `SELECT 
        rd.RefundDate, 
        IFNULL(full.TotalFullRefunds, 0) AS TotalFullRefunds, 
        IFNULL(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds 
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
            RefundDate = DATE(NOW()) 
            AND Refund_percentage = 100 
          GROUP BY 
            DATE(RefundDate), 
            Refund_Details.Refund_level_id
        ) full ON rd.RefundDate = full.RefundDate 
        LEFT JOIN (
          SELECT 
            DATE(RefundDate) AS RefundDate,
            SUM(Refund_amount) AS TotalPartialRefunds 
          FROM 
            Refund_Details 
            INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id 
          WHERE 
            RefundDate = DATE(NOW()) 
            AND Refund_percentage = 50 
          GROUP BY 
            DATE(RefundDate), 
            Refund_Details.Refund_level_id
        ) partial ON rd.RefundDate = partial.RefundDate 
      WHERE 
        rd.RefundDate = DATE(NOW()
      ) 
      GROUP BY rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds;`,

  refundWeekly:
     `SELECT 
        rd.RefundDate, 
        IFNULL(full.TotalFullRefunds, 0) AS TotalFullRefunds, 
        IFNULL(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds 
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
            RefundDate BETWEEN date (now())-6 AND date (now()) 
            AND Refund_percentage = 100 
          GROUP BY
            date(RefundDate)
        ) full ON rd.RefundDate = full.RefundDate 
        LEFT JOIN (
          SELECT 
            date(RefundDate) AS RefundDate,SUM(Refund_amount) AS TotalPartialRefunds 
          FROM 
            Refund_Details 
            INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id 
          WHERE 
            RefundDate BETWEEN date (now())-6 AND date (now()) 
            AND Refund_percentage = 50 
          GROUP BY 
            date(RefundDate)
        ) partial ON rd.RefundDate = partial.RefundDate 
      WHERE 
        rd.RefundDate BETWEEN date (now())-6 AND date (now()) 
      GROUP BY 
        rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds 
      ORDER BY 
        rd.RefundDate;`,

 refundMonthly: 
      `SELECT 
        rd.RefundDate,
        IFNULL(full.TotalFullRefunds, 0) AS TotalFullRefunds, 
        IFNULL(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds 
      FROM 
        Refund_Details rd 
        LEFT JOIN (
          SELECT 
            date(RefundDate) AS RefundDate, 
            SUM(Refund_amount) AS TotalFullRefunds 
          FROM 
            Refund_Details 
            INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id 
          WHERE
            MONTH(RefundDate) = MONTH(NOW()) 
            AND Refund_percentage = 100 
          GROUP BY date(RefundDate)
        ) full ON rd.RefundDate = full.RefundDate 
        LEFT JOIN (
          SELECT 
            date(RefundDate) AS RefundDate,
            SUM(Refund_amount) AS TotalPartialRefunds 
          FROM 
            Refund_Details 
            INNER JOIN Refund_Level ON Refund_Details.Refund_level_id = Refund_Level.Refund_level_id 
          WHERE 
            MONTH(RefundDate) = MONTH(NOW()) 
            AND Refund_percentage = 50 
          GROUP BY date(RefundDate)
        ) partial ON rd.RefundDate = partial.RefundDate 
      WHERE MONTH(rd.RefundDate) = MONTH(NOW()) 
      GROUP BY 
        rd.RefundDate, full.TotalFullRefunds, partial.TotalPartialRefunds 
      ORDER BY 
        rd.RefundDate;`,
//refund ends


//report revenue and refund fetching starts
  //fetch revenue
  getRevenue:'SELECT p.PaymentDate, SUM(p.PaymentAmount - COALESCE(r.Refund_amount,0)) AS TotalRevenue FROM payment_details p LEFT JOIN refund_details r ON p.Booking_id=r.Booking_id WHERE p.PaymentDate  BETWEEN (?) AND (?) GROUP BY p.PaymentDate ORDER BY p.PaymentDate;',

  getRefund: `
      SELECT
        rd.RefundDate,
        IFNULL(full.TotalFullRefunds, 0) AS TotalFullRefunds,
        IFNULL(partial.TotalPartialRefunds, 0) AS TotalPartialRefunds
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

const express = require('express')
const router = express.Router()


//----------Booked Slot Count------------------------
var stat_booked_slots = require('../api_operations_1/operations_stat/stat_slot_count/stat_booked_slots');
router.post('/bookedSlots', (req, res, next) => {
    stat_booked_slots(req, res);
})

//----------Available Slot Count---------------------
var stat_available_slots = require('../api_operations_1/operations_stat/stat_slot_count/stat_available_slots');
router.post('/availableSlots', (req, res, next) => {
    stat_available_slots(req, res);
})



//----------------Daily Booking & Cancellation Count-----------------------
var stat_book_n_cancel_daily = require('../api_operations_1/operations_stat/stat_book_n_cancel/stat_book_n_cancel_daily');
router.get('/bookingDaily', (req, res, next) => {
    stat_book_n_cancel_daily(req, res);
})

//----------------Weekly Booking & Cancellation Count-----------------------
var stat_book_n_cancel_weekly = require('../api_operations_1/operations_stat/stat_book_n_cancel/stat_book_n_cancel_weekly');
router.get('/bookingWeekly', (req, res, next) => {
    stat_book_n_cancel_weekly(req, res);
})

//----------------Monthly Booking & Cancellation Count-----------------------
var stat_book_n_cancel_monthly = require('../api_operations_1/operations_stat/stat_book_n_cancel/stat_book_n_cancel_monthly');
router.get('/bookingMonthly', (req, res, next) => {
    stat_book_n_cancel_monthly(req, res);
})



//----------------Daily Total Revenue --------------------------------------
var stat_revenue_daily = require('../api_operations_1/operations_stat/stat_total_revenue/stat_revenue_daily');
router.get('/revenueDaily', (req, res, next) => {
    stat_revenue_daily(req, res);
})

//----------------Weekly Total Revenue --------------------------------------
var stat_revenue_weekly = require('../api_operations_1/operations_stat/stat_total_revenue/stat_revenue_weekly');
router.get('/revenueWeekly', (req, res, next) => {
    stat_revenue_weekly(req, res);
})

//----------------Monthly Total Revenue --------------------------------------
var stat_revenue_monthly = require('../api_operations_1/operations_stat/stat_total_revenue/stat_revenue_monthly');
router.get('/revenueMonthly', (req, res, next) => {
    stat_revenue_monthly(req, res);
})



//----------------Full and Partial Refunds Daily--------------------------------------
var stat_refundFP_daily = require('../api_operations_1/operations_stat/stat_refund/stat_refundFP_daily');
router.get('/refundFPDaily', (req, res, next) => {
    stat_refundFP_daily(req, res);
})

//----------------Full and Partial Refunds Weekly--------------------------------------
var stat_refundFP_weekly = require('../api_operations_1/operations_stat/stat_refund/stat_refundFP_weekly');
router.get('/refundFPWeekly', (req, res, next) => {
    stat_refundFP_weekly(req, res);
})

//----------------Full and Partial Refunds Monthly--------------------------------------
var stat_refundFP_monthly = require('../api_operations_1/operations_stat/stat_refund/stat_refundFP_monthly');
router.get('/refundFPMonthly', (req, res, next) => {
    stat_refundFP_monthly(req, res);
})



//----------------Generating report fetch data--------------------------------------
var testPdf = require('../api_operations_1/operations_stat/stat_gen_report/test_pdf');
router.post('/testPdf', (req, res, next) => {
    testPdf(req, res);
});


module.exports = router




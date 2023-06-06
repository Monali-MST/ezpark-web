const PDFDocument = require('pdfkit');
const fs = require('fs');
const {Canvas, createCanvas} = require('canvas');

var fetchTotalRevenue = require('../api_operations_1/operations_stat/stat_gen_report/get_revenue')

// const Chart = require('chart.js');


module.exports = async function testPdf (req, res){
    function generateChartImage(){
        const canvas = createCanvas(400,400);
        const ctx = canvas.getContext('2d');
        //console.log("Test Ok")

        //generating chart
        const chartDataRev={
            labels: revenueData.map((data) => {
              const paymentDate = data.PaymentDate;
              if (paymentDate) {
                console.log(paymentDate);
                const date = new Date(paymentDate);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
              }
              return '';
            }),
            
            datasets:[{
              label: "Total Revenue",
              data: revenueData.map((data)=> data.TotalRevenue),
              backgroundColor:"#E7AD52", //better color
            }]
          }


        const buffer = canvas.toBuffer('image/png');

        return buffer;
    }

    function generateChartPDF(){
        const doc = new PDFDocument();

    //test();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="output.pdf"');
    doc.pipe(res);

    doc
    .font('Times-Bold')
    .fontSize(21)
    .text('Financial Report of the Parking Yard from 2023/05/01 to 2023/05/09', 190,75);
    
    doc.image('../frontend/src/Assets/logo_trans.png', 40, 20, {width: 100})

    doc.end();

    }
    
    
    
    
}


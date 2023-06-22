const PDFDocument = require('pdfkit');
const fs = require('fs');
const { fetchTotalRevenue } = require('../stat_gen_report/get_revenue');
const { fetchTotalRefund } = require('../stat_gen_report/get_refund');
const { createTransport } = require('nodemailer');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: 500, height: 300 });

module.exports = async function testPdf(req, res) {
  const { fromDate, toDate, email } = req.body;
  try {
    const revenueData = await fetchTotalRevenue(fromDate, toDate);
    const refundData = await fetchTotalRefund(fromDate, toDate);

    const doc = new PDFDocument();
    const outputFilePath = 'output.pdf';

    doc.pipe(fs.createWriteStream(outputFilePath));

    doc.font('Times-Bold');

    doc
      .fontSize(21)
      .text('Financial Report of the Parking Yard', { align: 'center' })
      .text(`From ${formatDate(fromDate).slice(0, 10)} to ${formatDate(toDate).slice(0, 10)}`, { align: 'center', marginBottom: 20 })
      .image('../frontend/src/Assets/logo_trans.png', 40, 20, { width: 80 });
    doc.moveDown();

    doc.fontSize(16).text('Total Revenue', { align: 'center', marginTop: 20 });
    doc.moveDown();
    if (revenueData.length > 0) {
      const chartConfiguration = {
        type: 'bar',
        data: {
          labels: revenueData.map(data => formatDate(data.PaymentDate)),
          datasets: [
            {
              label: 'Total Revenue',
              data: revenueData.map(data => data.TotalRevenue),
              backgroundColor: '#E7AD52'
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                precision: 0,
              },
            },
          },
        },
      };

      const chartImage = await chartJSNodeCanvas.renderToBuffer(chartConfiguration);
      doc.image(chartImage, { align: 'center', width: 400 });

    } else {
      doc
        .fillColor('red')
        .fontSize(19)
        .text(`No revenue from ${formatDate(fromDate).slice(0, 10)} to ${formatDate(toDate).slice(0, 10)}`, { align: 'center' })
    }
    doc.moveDown();

    doc.fontSize(16).text('Full and Partial Refunds', { align: 'center', marginTop: 20 });
    doc.moveDown();
    if (refundData.length > 0) {
      const chartConfiguration = {
        type: 'bar',
        data: {
          labels: refundData.map(data => formatDate(data.RefundDate)),
          datasets: [
            {
              label: 'Full Refunds',
              data: refundData.map(data => data.TotalFullRefunds),
              backgroundColor: '#E7AD52',
            },
            {
              label: 'Partial Refunds',
              data: refundData.map(data => data.TotalPartialRefunds),
              backgroundColor: 'black',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                precision: 0,
              },
            },
          },
        },
      };

      const chartImage = await chartJSNodeCanvas.renderToBuffer(chartConfiguration);
      doc.image(chartImage, { align: 'center', width: 400 });
    } else {
      doc
        .fontSize(19)
        .fillColor('red')
        .text(`No refunds from ${formatDate(fromDate).slice(0, 10)} to ${formatDate(toDate).slice(0, 10)}`, { align: 'center' })

    }

    doc.end();

    // Send the generated PDF via email
    const transporter = createTransport({
      host: 'smtp.gmail.com', //simple mail trasfer protocol of gmail
      port: 587,
      secure: false,
      auth: {
        // user: 'fernandownm.20@itfac.mrt.ac.lk',
        // pass: 'rovzjxkjiflfntkv',

        user: 'ezparkv@gmail.com',
        pass: 'yqlueyohvlfqfmkk',

      },
    });

    const mailOptions = {
      //from: 'fernandownm.20@itfac.mrt.ac.lk',
      from: 'ezparkv@gmail.com',
      to: email,
      subject: 'Financial Report',
      text: 'Please find the attached financial report. This is an auto generated mail, do not reply.',
      attachments: [
        {
          filename: 'output.pdf',
          path: outputFilePath,
          contentType: 'application/pdf',
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
      }
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ success: false, error: 'Failed to generate PDF' });
  }
};

function formatDate(date) {
  if (date) {
    const formattedDate = new Date(date);
    return `${formattedDate.getFullYear()}-${(formattedDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${formattedDate.getDate().toString().padStart(2, '0')}`;
  }
  return '';
}

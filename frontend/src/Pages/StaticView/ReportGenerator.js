import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import BarChart from "./BarChart";

function DateRangePicker(props) {
    const [showPopup, setShowPopup] = useState(false);
    const [dates, setDates] = useState({
      fromDate: "",
      toDate: ""
    })
    var [revenueData, setRevenueData] = useState([]);
    var [refData, setRefundData] = useState([]);
    const handleGenerate = async () => {
    if (dates.fromDate && dates.toDate) {
        // Step 2: Fetch total revenue
        await axios.get('http://localhost:8800/testPdf', dates)
        .then(response =>{
            //console.log(response.data);
            // setRevenueData(response.data);
            console.log("setRevenueData");
          })
          .catch(error => {
            console.log(error);
          }
        )    
        setShowPopup(false); 
    } else {
      alert('Please select both "from" and "to" dates');
    }
  };
  const handleCancel = () => {
    setShowPopup(false);
    props.onCancel();
  }
  const handleReport = () => {
    setShowPopup(true);
  }
  const handleChange =  (name, value)=>{
    if(name==="toDate"){
      setDates((prev) => ({...prev, toDate: value}));
    }else{
      setDates((prev) => ({...prev, fromDate: value}));
    } 
  }
  //Revenue chart
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

  //refund chart
  const chartDataRef={
    labels: refData.map((data) => {
      const refundDate = data.RefundDate;
      if (refundDate) {
        const date = new Date(refundDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      }
      return '';
    }),
    datasets:[{
      label: "Full Refunds",
      data: refData.map((data)=> data.TotalFullRefunds),
      backgroundColor:"#E7AD52", //better color
    },
    {
      label: "Parital Refunds",
      data: refData.map((data)=> data.TotalPartialRefunds),
      backgroundColor:"black", 
    }]
  }


  return (
    <div>
      <button className="btn btn-primary" onClick={handleReport}>Generate Report</button>
      {showPopup &&(
        <div className="date-range-picker">
          <div className="form-group">
            <label htmlFor="from-date">From Date</label>
            <DatePicker
              id="from-date"
              selected={dates.fromDate}
              onChange={(date) => handleChange("fromDate", date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="form-group">
            <label htmlFor="to-date">To Date</label>
            <DatePicker
              id="to-date"
              selected={dates.toDate}
              onChange={(date) => handleChange("toDate", date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={handleGenerate}>Generate</button>
        </div>
      )}
      <div>
        <div style={{width:700}}>
          <BarChart chartData={chartDataRev}/>
        </div>
      </div>

      <div>
        <div style={{width:700}}>
          <BarChart chartData={chartDataRef}/>
        </div>
      </div>
    </div>
  );
}
export default DateRangePicker;


// const totalRevenue = responseRevenue.data.totalRevenue;
        // console.log(totalRevenue);

        // Step 3: Fetch total refunds
        //const responseRefunds = await axios.post('http://localhost:8800/reportRefundsFetch', {
        // });
        //const totalRefunds = responseRefunds.data.totalRefunds;
        
        // Pass the total revenue and refunds to the parent component
        // props.onFinancialData(totalRevenue, totalRefunds);
          // await axios.post('http://localhost:8800/reportRefundsFetch', dates)
        // .then(response =>{
        //   setRefundData(response.data);
        // })
        // .catch(error => {
        //   console.log(error);
        // }
        // )

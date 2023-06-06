import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePicker(props) {
    const [showPopup, setShowPopup] = useState(false);
    // const [fromDate, setFromDate] = useState(null);
    // const [toDate, setToDate] = useState(null);
    const [dates, setDates] = useState({
      fromDate: "",
      toDate: ""
    })
    const handleGenerate = async () => {
    
    if (dates.fromDate && dates.toDate) {
        // Step 2: Fetch total revenue
        await axios.post('http://localhost:8800/reportRevenueFetch', dates)
        .then(
          await axios.post('http://localhost:8800/reportRefundsFetch', dates)
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
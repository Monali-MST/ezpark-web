import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePicker(props) {
    const [showPopup, setShowPopup] = useState(false);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

  const handleGenerate = () => {
    if (fromDate && toDate) {
        props.onGenerate(fromDate, toDate);
        setShowPopup(false);
    } else {
        alert('Please select both from and to dates');
    }
  }

  const handleCancel = () => {
    setShowPopup(false);
    setFromDate(null);
    setToDate(null);
    props.onCancel();
  }

  const handleReport = () => {
    setShowPopup(true);
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
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="form-group">
            <label htmlFor="to-date">To Date</label>
            <DatePicker
              id="to-date"
              selected={toDate}
              onChange={(date) => setToDate(date)}
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

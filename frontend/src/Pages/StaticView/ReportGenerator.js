import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import TickIcon from "./../../Assets/tick.png";
//import BarChart from "./BarChart";

function DateRangePicker(props) {
    const [showFormPop, setShowFromPop] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [dates, setDates] = useState({
      fromDate: "",
      toDate: "",
      email: localStorage.getItem('email')
    })

    
    const handleGenerate = async () => {
    if (dates.fromDate && dates.toDate) {

        await axios.post('http://localhost:8800/testPdf', dates)
        .then(response =>{
            //console.log(response.data);
            // setRevenueData(response.data);
            //console.log("setRevenueData");

            if(response.status===200){
              console.log("email sent successfully");
              setShowSuccessPopup(true); 
            }else{
              alert("Sending email faild.");
            }
          })
          .catch(error => {
            console.log(error);
            alert("Error occured while generating report");
          }
        )    
        setShowFromPop(false); 
    } else {
      alert('Please select both "from" and "to" dates');
    }
  };

  const popUpClose = () => {
    setShowFromPop(false);
  }
  const popUpOK = () => {
    setShowSuccessPopup(false);
  }

  const handleCancel = () => {
    setShowFromPop(false);
    props.onCancel();
  }

  const handleReport = () => {
    setShowFromPop(true);
  }

  const handleChange =  (name, value)=>{
    if(name==="toDate"){
      setDates((prev) => ({...prev, toDate: value}));
    }else{
      setDates((prev) => ({...prev, fromDate: value}));
    } 
  }


  useEffect(()=>{
    localStorage.setItem('email',"nathalifernando70@gmail.com");
  },[])


  return (
    <div>
      <button className="btn-gen-report" onClick={handleReport}>Generate Report</button>

      {/* success message */}
      {showSuccessPopup ? <div className="popup-overlay">
        <div className='popup-content'>
          <div className='popup-content-success'>
          <img src={TickIcon} alt='tick' className="tick-icon" style={{width:60}}></img>
          <h3>Email Sent Successfully</h3>
          <button className="btn-OK" onClick={() => popUpOK()}>OK</button>
        </div>
        </div>
      </div> :null}


      {showFormPop ? <div className="popup-overlay">
      <div className="popup-content">
        {/* Your popup content goes here */}
          <button  class="close-button" aria-label="Close">
            <span aria-hidden="true" onClick={() => popUpClose()}>&times;</span>
          </button>

        <div className="date-range-picker">
          <h3>Dates</h3>
          <div className="form-group">
            <div><label htmlFor="from-date">From :</label></div>
            <div className='from-date-box'><DatePicker
              id="from-date"
              selected={dates.fromDate}
              onChange={(date) => handleChange("fromDate", date)}
              dateFormat="dd/MM/yyyy"
            /></div>
          </div>
          <div className="form-group">
            <div className='to-date'><label htmlFor="to-date">To :</label></div>
            <div className='to-date-box'><DatePicker
              id="to-date"
              selected={dates.toDate}
              onChange={(date) => handleChange("toDate", date)}
              dateFormat="dd/MM/yyyy"
            /></div>
          </div>
          <div className='btn-containter'>
            <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
            <button className="btn-generate" onClick={handleGenerate}>Generate</button>
          </div>
        </div>

      </div>
    </div> : null}

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


  //Revenue chart
  // const chartDataRev={
  //   labels: revenueData.map((data) => {
  //     const paymentDate = data.PaymentDate;
  //     if (paymentDate) {
  //       console.log(paymentDate);
  //       const date = new Date(paymentDate);
  //       const year = date.getFullYear();
  //       const month = date.getMonth() + 1;
  //       const day = date.getDate();
  //       return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  //     }
  //     return '';
  //   }),
    
  //   datasets:[{
  //     label: "Total Revenue",
  //     data: revenueData.map((data)=> data.TotalRevenue),
  //     backgroundColor:"#E7AD52", //better color
  //   }]
  // }

  //refund chart
  // const chartDataRef={
  //   labels: refData.map((data) => {
  //     const refundDate = data.RefundDate;
  //     if (refundDate) {
  //       const date = new Date(refundDate);
  //       const year = date.getFullYear();
  //       const month = date.getMonth() + 1;
  //       const day = date.getDate();
  //       return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  //     }
  //     return '';
  //   }),
  //   datasets:[{
  //     label: "Full Refunds",
  //     data: refData.map((data)=> data.TotalFullRefunds),
  //     backgroundColor:"#E7AD52", //better color
  //   },
  //   {
  //     label: "Parital Refunds",
  //     data: refData.map((data)=> data.TotalPartialRefunds),
  //     backgroundColor:"black", 
  //   }]
  // }

     {/* <div>
        <div style={{width:700}}>
          <BarChart chartData={chartDataRev}/>
        </div>
      </div>

      <div>
        <div style={{width:700}}>
          <BarChart chartData={chartDataRef}/>
        </div>
      </div> */}
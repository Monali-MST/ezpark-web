import React from 'react'
// import { Navigate } from 'react-router-dom';

const RefundButton = () => {
  // const bookeddate=2023/03/25;
  // const cancelbookingdate=2023/03/20;
  // const duration=bookeddate-cancelbookingdate;
  const duration=2;
  var refundRate=0.00;
  var refund=0;
  const paidFee=200;

  if (duration>=5){
    refundRate=1;
  }else if(duration>=3){
    refundRate=0.5;
  }else{
    refundRate=0.00;
  }
  
  refund=refundRate * paidFee;

  if ({refund}==0){
    // <Navigate>navigate to request refund popup window. RequestRefundButton</Navigate>
  }else{
    // do refund
    // <Navigate>navigate to success refund page/notification/popup window. SuccessRefund</Navigate>
  }

  return (
    <div>
      <h1>Refunding calculation page</h1>
      <h3>Duration : {duration}</h3>
      <h3>Refund Rate : {refundRate}</h3>
      <h3>Paid Amount : {paidFee}</h3>
      <h2>Refund : {refund}</h2>
    </div>
  )
}

export default RefundButton

import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import checkmarkImage from "../../Assets/pay_success_pic.jpg";
import {
  delete_localStorage,
  load_localStorage,
  localStorage_keys,
} from "../../helper/handle_localStorage";

const SuccessPay = () => {
  const data = load_localStorage(localStorage_keys.temp_payment);
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  useEffect(() => {
    console.log(data);
  }, []);

  const billInfo = {
    billNo: data.bill_no,
    amount: data.amount,
    date: date,
    time: time,
    slotNo: data.slot_id,
    email: data.email,
  };

  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={6} className="bg-white p-5">
          <Image
            src={checkmarkImage}
            width={130}
            height={130}
            className="mb-3"
          />
          <h1 className="mb-3 text-dark">Payment Successful</h1>
          <p className="lead mb-4 text-dark">
            Thank you for your purchase! Your order will be processed and
            shipped shortly.
          </p>
          <div className="bg-light p-3 rounded mb-3">
            <p className="m-0">
              <strong>Bill Number:</strong> {billInfo.billNo}
            </p>
            <p className="m-0">
              <strong>Amount:</strong> {billInfo.amount}
            </p>
            <p className="m-0">
              <strong>Date:</strong> {billInfo.date}
            </p>
            <p className="m-0">
              <strong>Time:</strong> {billInfo.time}
            </p>
            <p className="m-0">
              <strong>Slot Number:</strong> {billInfo.slotNo}
            </p>
            <p className="m-0">
              <strong>Email:</strong> {billInfo.email}
            </p>
          </div>
          <Button
            variant="warning"
            href="/"
            className="mb-3"
            onClick={() => {
              delete_localStorage(localStorage_keys.temp_payment);
            }}
          >
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessPay;

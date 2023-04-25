import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import checkmarkImage from "../../Assets/pay_success_pic.jpg";
import axios from "axios";
import {
  delete_localStorage,
  save_localStorage,
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

  const billInfo = {
    billNo: data.bill_no,
    amount: data.amount,
    date: date,
    time: time,
    bookingId: data.book_id,
    slotName: data.slot_name,
    email: data.email,
    payment_intent_id: 4,
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const randomId = params.get("id");
    let isPaymentDuplicated = true;
    try {
      const stored_random_key = load_localStorage(
        localStorage_keys.payment_RandomId
      );
      if (randomId !== stored_random_key) {
        isPaymentDuplicated = false;
      }
    } catch (error) {
      console.log("error: no data to load in local storage ");
      isPaymentDuplicated = false;
    }

    if (!isPaymentDuplicated) {
      try {
        axios
          .post(
            "http://localhost:8800/api/user/save_payment_details",
            billInfo
          )
          .then((res) => {
            console.log(res.data);
            save_localStorage(localStorage_keys.payment_RandomId, randomId);
            console.log("local stoerd");
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

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
              <strong>Booking ID:</strong> {billInfo.bookingId}
            </p>
            <p className="m-0">
              <strong>Slot Number:</strong> {billInfo.slotName}
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

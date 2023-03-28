import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const AdminRefundRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/user/get/get_refund_request"
        );
        setRequests(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRequests();
  }, []);

  return (
    <div className="Refund-requests">
      <Accordion defaultActiveKey={0}>
        {requests.map((request, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              Refund Request #{request.Refund_Request_id}
            </Accordion.Header>
            <Accordion.Body>
              <b>Reason :</b>
              <p>{request.Reason}</p>
              <b>Booking ID :</b>
              <p>{request.Booking_id}</p>
              <b>Paid Amount :</b>
              <p>Rs.{request.PaymentAmount}.00</p>
              <Button variant="primary">Accept Refund</Button>{" "}
              <Button variant="danger">Reject Reqest</Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AdminRefundRequest;

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const AdminRefundRequest = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Refund Request #1</Accordion.Header>
          <Accordion.Body>
            <b>Reason :</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            Booking ID:
            <p>0154</p>
            Paid Amount:
            <p>Rs.250.00</p>
            <Button variant="primary">Accept Refund</Button>{" "}
            <Button variant="danger">Reject Reqest</Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Refund Reques #2</Accordion.Header>
          <Accordion.Body>
            <b>Reason :</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            Booking ID:
            <p>0154</p>
            Paid Amount:
            <p>Rs.250.00</p>
            <Button variant="primary">Accept Refund</Button>{" "}
            <Button variant="danger">Reject Reqest</Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Refund Reques #3</Accordion.Header>
          <Accordion.Body>
            <b>Reason :</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            Booking ID:
            <p>0154</p>
            Paid Amount:
            <p>Rs.250.00</p>
            <Button variant="primary">Accept Refund</Button>{" "}
            <Button variant="danger">Reject Reqest</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AdminRefundRequest;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ClientRefundRequest = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const today = new Date();
  const date =
    today.getFullYear() +
    "." +
    (today.getMonth() + 1) +
    "." +
    today.getDate();

  const [request, setrequest] = useState({
    Booking_id: "",
    Reason: "",
    Requested_date: date,
  });

  const handleChange = (e) => {
    setrequest((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!request.Booking_id || !request.Reason) {
      alert("Please fill out all fields");
      return;
    }

    try {
      axios.post(
        "http://localhost:8800/api/user/send_refund_request",
        request
      )
      .then((res)=>{
        console.log(res);
        navigate("/");
      })
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Request Refund
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Refunds Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Booking ID:</Form.Label>
              <Form.Control
                type="text"
                placeholder="1008"
                onChange={handleChange}
                name="Booking_id"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Reason for the Booking Cancelation:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                onChange={handleChange}
                name="Reason"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a reason.
              </Form.Control.Feedback>
              <Form.Text muted>
                Your Reason must be a reasonable reason to get the refunds. As
                soon as the admin accepts your request, refunds will be
                transfered to your bank account.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Send Request
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClientRefundRequest;

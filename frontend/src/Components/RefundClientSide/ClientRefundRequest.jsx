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

  const [request, setrequest] = useState({
    Booking_id: "",
    Reason: "",
    Requested_date: today,
  });

  const handleChange = (e) => {
    setrequest((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8800/api/user/post/send_refund_request",
        request
      );
      navigate("/");
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
          <Modal.Title>Modal heading</Modal.Title>
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
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClientRefundRequest;

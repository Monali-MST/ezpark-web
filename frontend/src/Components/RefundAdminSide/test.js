import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AdminRefundRequest = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [requests, setRequests] = useState([]);
  const [id, setId] = useState();

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

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:8800/api/user/response/reject_refund_request" + id
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const Model = (props) => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this Refund Request?
          {props.refund_req_id}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="Refund-requests">
      <Accordion defaultActiveKey={0}>
        {requests.map((request, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Model refund_req_id={request.Refund_Request_id} />
            <Accordion.Header>
              Refund Request #{request.Refund_Request_id}
            </Accordion.Header>
            <Accordion.Body>
              <b>Reason :</b>
              <p>{request.Reason}</p>
              <b>Booking ID :</b>
              <p>{request.Booking_id}</p>
              <b>Requested Date :</b>
              <p>{new Date(request.Requested_date).toDateString()}</p>
              <b>Paid Amount :</b>
              <p>Rs.{request.PaymentAmount}.00</p>
              <Button variant="primary">Accept Refund</Button>{" "}
              <Button variant="danger" onClick={handleShow}>
                Reject Reqest
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this Refund Request?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default AdminRefundRequest;

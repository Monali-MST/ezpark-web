import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const AdminRefundRequest = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [toastShow, setToastShow] = useState(false);

  const [requests, setRequests] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/user/get_refund_request"
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
      await axios.delete(
        "http://localhost:8800/api/user/reject_refund_request" + id
      );
      window.location.reload();

    } catch (err) {
      console.log(err);
    }
  };
  const ToastComp = () => {
    return (
      <ToastContainer className="p-3" position="bottom-end">
        <Toast onClose={() => setToastShow(false)} delay={7000} autohide>
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Ez Park</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body>Refund Request has been deleted successfully.</Toast.Body>
        </Toast>
      </ToastContainer>
    );
  };
  const Model = () => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Refund Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this Refund Request?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete(id);
              setToastShow(true);
              handleClose();
            }}
          >
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
              <Button variant="primary" >Accept Refund</Button>{" "}
              <Button
                variant="danger"
                onClick={() => {
                  handleShow();
                  setId(request.Refund_Request_id);
                }}
              >
                Reject Reqest
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Model />
      {toastShow ? <ToastComp /> : ""}
    </div>
  );
};

export default AdminRefundRequest;

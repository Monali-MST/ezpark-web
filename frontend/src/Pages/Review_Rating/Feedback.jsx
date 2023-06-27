import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Feedback.css";

const ReviewPage = () => {
  const [review, setReview] = useState("");

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of rating and review

    console.log("Review:", review);
    // Reset form fields
    setReview("");
  };

  return (
    <div>
      <Header />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
        <div className="Feedback_form">
          <h1 style={{ marginTop: "50px" }}>Give your valuable Feedback</h1>
          <form
            onSubmit={handleSubmit}
            style={{ textAlign: "center", marginTop: "40px" }}
          >
            <div>
              <h3>How happy are you with our product?</h3>
            </div>
            <div>
              <textarea
                value={review}
                onChange={handleReviewChange}
                style={{ width: "400px", height: "200px" }}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        </Col>
      </Row>
    </div>
  );
};

export default ReviewPage;

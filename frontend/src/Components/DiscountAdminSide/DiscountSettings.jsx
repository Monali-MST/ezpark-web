import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const DiscountSettings = () => {
  const [discountDetails, setDiscountDetails] = useState({
    exp_date: "",
    discount_name: "",
    gold_discount_precentage: 0,
    silver_discount_precentage: 0,
    bronze_discount_precentage: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const discountData = {
      exp_date: discountDetails.exp_date,

      discount_data: [
        {
          discount_name: "Gold " + discountDetails.discount_name,
          badge_id: 1,
          discount_percentage: discountDetails.gold_discount_precentage,
        },
        {
          discount_name: "Silver " + discountDetails.discount_name,
          badge_id: 2,
          discount_percentage: discountDetails.silver_discount_precentage,
        },
        {
          discount_name: "Bronze " + discountDetails.discount_name,
          badge_id: 3,
          discount_percentage: discountDetails.bronze_discount_precentage,
        },
      ],
    };

    try {
      axios
        .put("http://localhost:8800/api/user/updateDiscount", discountData)
        .then((res) => {
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiscountDetails({ ...discountDetails, [name]: value });
  };

  return (
    <div style={{ margin: "5rem" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalExpDate">
          <Form.Label column sm={3}>
            Exp. Date
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="date"
              placeholder="Enter exp. date"
              value={discountDetails.exp_date}
              onChange={handleChange}
              name="exp_date"
              autoFocus
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Discount Name:
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="text"
              placeholder="Enter discount name"
              value={discountDetails.discount_name}
              onChange={handleChange}
              name="discount_name"
              autoFocus
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Gold badge Percentage (%):
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="number"
              placeholder="Enter discount percentage"
              value={
                discountDetails.gold_discount_precentage > 0
                  ? discountDetails.gold_discount_precentage
                  : ""
              }
              onChange={handleChange}
              name="gold_discount_precentage"
              autoFocus
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Silver badge Percentage (%):
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="number"
              placeholder="Enter discount percentage"
              value={
                discountDetails.silver_discount_precentage > 0
                  ? discountDetails.silver_discount_precentage
                  : ""
              }
              onChange={handleChange}
              name="silver_discount_precentage"
              autoFocus
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Bronze badge Percentage (%):
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="number"
              placeholder="Enter discount percentage"
              value={
                discountDetails.bronze_discount_precentage > 0
                  ? discountDetails.bronze_discount_precentage
                  : ""
              }
              onChange={handleChange}
              name="bronze_discount_precentage"
              autoFocus
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="primary" type="submit">
              Set Discounts
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default DiscountSettings;

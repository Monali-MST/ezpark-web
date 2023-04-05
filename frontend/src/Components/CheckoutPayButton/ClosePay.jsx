import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import errorImage from '../../Assets/icon-cancel.png';

const ClosePay = () => {
  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={6} className="bg-white p-5">
          <Image src={errorImage} width={100} height={100} className="mb-3" />
          <h1 className="mb-3 text-dark">Payment Canceled</h1>
          <p className="lead mb-4 text-dark">
            We're sorry to hear that your payment has been canceled.
          </p> 
          <Button variant="warning" href="/" className="mb-3">
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ClosePay

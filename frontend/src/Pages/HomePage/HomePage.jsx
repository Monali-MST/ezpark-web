import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import CheckoutPayButton from "../../Components/CheckoutPayButton/CheckoutPayButton";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <h5>Payment (in booking page)</h5>
      <CheckoutPayButton />

      <h5>Refund Requests (in admin panal)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/adminrefundrequest">Refund Requests</Link>
      </Button>
      <hr></hr>
      <h5>(in testing level)</h5>
      <h5>points adding function (register, booking, review, rate, )</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/pointsaddbutton"> points add</Link>
      </Button>

      <h5>Refund (in admin panal, cancel booking)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/refund"> Refund</Link>
      </Button>

      <Footer />
    </div>
  );
};

export default HomePage;

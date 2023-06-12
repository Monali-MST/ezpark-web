import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CheckoutPayButton from "../../Components/CheckoutPayButton/CheckoutPayButton";
import NavBar from "../../Components/PointsystemDetails/NavBar/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar/>

      <h5>Point_System Details (in nav bar, user profile)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/pointsystem">P_System</Link>
      </Button>

      <h5>Payment (in booking page)</h5>
      <CheckoutPayButton />

      <h5>Refund Requests (in admin panal)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/adminrefundrequest">Refund Requests</Link>
      </Button>

      <h5>Refund Requests (in client side cancel booking)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/clientrefundrequest">To Send Request page</Link>
      </Button>

      <hr></hr>

      <h5>(In testing level)</h5>
      <br></br>
      <h5>points adding function (register, booking, review, rate, cancel booking, panalty)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/pointsaddbutton"> points add</Link>
      </Button>

      <h5>Refund (in admin panal, cancel booking)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/refund"> To Refund page</Link>
      </Button>

      <h5>Refund (in admin panal)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/refund"> To Refund page</Link>
      </Button>

      <h5>Discount Settings (in admin panal)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/discountsettings"> Set Discounts</Link>
      </Button>
    </div>
  );
};

export default HomePage;

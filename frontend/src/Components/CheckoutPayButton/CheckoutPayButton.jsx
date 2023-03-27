import React from "react";
import "./CheckoutPayButton.css";

import Button from "react-bootstrap/Button";

const CheckoutPayButton = () => {
  const handlecheckbutton = () => {
    fetch("http://localhost:8800/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id: 1, quantity: 1 }],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={handlecheckbutton}>
        Pay Now
      </Button>
    </div>
  );
};

export default CheckoutPayButton;

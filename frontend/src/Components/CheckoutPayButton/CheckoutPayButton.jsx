import React from "react";

import Button from "react-bootstrap/Button";
import {
  save_localStorage,
  localStorage_keys,
} from "../../helper/handle_localStorage";

const CheckoutPayButton = () => {
  const amount = 1000;
  const name = "Slot Name: Zone C -20";

  const handlecheckbutton = async () => {
    const data = {
      book_id: 14,
      slot_name: "Slot Name: Zone C -20",
      amount: amount,
      bill_no: 123,
      email: "testmail@gmail.com",
      user_id: 12,
    };

    save_localStorage(localStorage_keys.temp_payment, data);

    fetch("http://localhost:8800/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id: 1, quantity: 1 }],
        price: amount,
        name: name,
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
      <Button variant="outline-primary" size="sm" onClick={handlecheckbutton}>
        Pay Now
      </Button>
    </div>
  );
};

export default CheckoutPayButton;

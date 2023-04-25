// Import the required libraries
import React from "react";
import Button from "react-bootstrap/Button";

const RefundButton = () => {
  const handleRefund = async () => {
    // Send payment method ID to backend for refund
    const response = await fetch("http://localhost:8800/refund", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentMethodId: "pm_1MtWLhKdpK5vl1GehhxGDK5e" }),
    });

    if (response.ok) {
      // Handle successful refund
      console.log("Refund successful");
    } else {
      // Handle refund error
      console.error("Error refunding payment:", response.statusText);
    }
  };

  return (
    <div>
      <div>
        <p>Do you want to refund?</p>
      </div>
      <Button variant="outline-primary" size="sm" onClick={handleRefund}>
        Refund
      </Button>
    </div>
  );
};

export default RefundButton;

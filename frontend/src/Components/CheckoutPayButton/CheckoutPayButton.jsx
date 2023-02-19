import React from 'react'

const CheckoutPayButton = () => {
    const handlecheckbutton = () => {
        fetch("http://localhost:8800/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              { id: 1, quantity: 3 },
              { id: 2, quantity: 1 },
            ],
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
        <div className="App">
          <button
            onClick={
              handlecheckbutton
            }
          >
            Checkout
          </button>
        </div>
      );
}

export default CheckoutPayButton

var express = require("express");
var cors = require("cors");
var app = express();

//---------------------stripe CheckoutPayButton API start-----------------------
module.exports = function stripe_api(){
    app.use(
        cors({
          origin: "http://localhost:3000",
        })
      );
      
      const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
      
      const storeItems = new Map([
        [1, { priceInCents: 10000, name: "Slot Name: Zone C -20" }],
      ]);
      
      app.post("/create-checkout-session", async (req, res) => {
        try {
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: req.body.items.map((item) => {
              const storeItem = storeItems.get(item.id);
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: storeItem.name,
                  },
                  unit_amount: storeItem.priceInCents,
                },
                quantity: item.quantity,
              };
            }),
            success_url: `http://localhost:3000/successpay`,
            cancel_url: `http://localhost:3000/closepay`,
          });
          res.json({ url: session.url });
        } catch (e) {
          res.status(500).json({ error: e.message });
        }
      });
      
}
//---------------------stripe CheckoutPayButton API end-----------------------

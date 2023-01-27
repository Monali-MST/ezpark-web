import React from "react";
import "./Refunds.css";
import refundImg from "../../Assets/refunds_picture.png";

const Refunds = () => {
  return (
    <section>
      <div className="Refunds">
        <div className="title-bar">
          <div className="title">Refunds</div>
        </div>

        <div className="cont">
          <img className="Refunds-img" src={refundImg} alt="Silver" />
          <div className="level-section">
            <div className="level-title">How much refund can I get?</div>

            <div className="badge-levels">
              <div className="gold-badge-level">
                <h3>5 or above days to Booked day</h3>
                <h3>100% Refund</h3>
              </div>
              <div className="silver-badge-level">
                <h3>3 or above days to Booked day</h3>
                <h3>50% Refund</h3>
              </div>
              <div className="bronze-badge-level">
                <h3>Below 3 days to Booked day</h3>
                <h3>No Refund</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refunds;

import React from "react";
import "./Discount.css";
import dicountImg from "../../Assets/discounts_picture.png";

const Discount = () => {
  return (
    <section>
      <div className="discounts">
        <div className="title-bar">
          <div className="title">Discounts</div>
        </div>

        <div className="cont">
          <img className="discount-img" src={dicountImg} alt="Silver" />
          <div className="level-section">
            <div className="level-title">How can I get Discounts?</div>

            <div className="badge-levels">
              <div className="gold-badge-level">
                <h3>Gold Badge</h3>
                <h3>10% Discounts</h3>
              </div>
              <div className="silver-badge-level">
                <h3>Silver Badge</h3>
                <h3>5% Discounts</h3>
              </div>
              <div className="bronze-badge-level">
                <h3>Bronze Badge</h3>
                <h3>2% Discounts</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;

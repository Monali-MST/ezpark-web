import React from "react";
import "./Points.css";
import pointImg from "../../Assets/point_picture.png";

const Points = () => {
  return (
    <section>
      <div className="points">
        <div className="title-bar">
          <div className="title">EZ Points</div>
        </div>

        <div className="cont">
          <img className="point-img" src={pointImg} alt="pointImg" />
          <div className="description-title">
            <p>What are EZ Points?</p>
          </div>
          <div className="description">
            <p>
              EZ Points are EZ Park currency to get Discounts and to level up
              your Badges. When you register on EZ Park, you are immediately
              awarded with 2 EZ Points. As you continue to Book more parking
              slots, you earn more EZ Points. Earn more EZ Points and Enjoy the
              parking.
            </p>
          </div>

          <div className="description-title">
            <p>How can I earn EZ Points?</p>
          </div>
          <div className="pointAction">
            <div className="gold-point">
              <h3>Register</h3>
              <h3>2 Points</h3>
            </div>
            <div className="silver-point">
              <h3>One review</h3>
              <h3>1 Points</h3>
            </div>
            <div className="bronze-point">
              <h3>One Book Hour</h3>
              <h3>1 Points</h3>
            </div>
            <div className="gold-point">
              <h3>One Book Cancelation </h3>
              <h3>-1 Points</h3>
            </div>
            <div className="silver-point">
              <h3>One Rating</h3>
              <h3>1 Points</h3>
            </div>
            <div className="bronze-point">
              <h3>penalty fee</h3>
              <h3>-5 Points</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Points;

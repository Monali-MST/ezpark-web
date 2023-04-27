import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Discount.css";
import dicountImg from "../../../Assets/discounts_picture.png";

const Discount = () => {
  const [discounts, setdiscounts] = useState([]);
  useEffect(() => {
    const fetchAlldiscounts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/user/getdiscounts"
        );
        setdiscounts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAlldiscounts();
  }, []);

  const colorList = ["#fdaf06", "#8740e4", "#cf782c"];

  return (
    <section id="discounts">
      <div className="discounts">
        <div className="title-bar">
          <div className="title">Discounts</div>
        </div>

        <div className="cont">
          <img className="discount-img" src={dicountImg} alt="dicountImg" />

          <div className="level-section">
            <div className="level-title">How Can I get Discounts?</div>
            {discounts.map((discount, index) => (
              <div key={discount.Discount_ID}>
                <div className="badge-levels">
                  <div
                    className="bronze-badge-level"
                    style={{ backgroundColor: colorList[index] }}
                  >
                    <h3>{discount.Discounts_Name}</h3>
                    <h3>{discount.DefaultDiscount}% Discounts</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;

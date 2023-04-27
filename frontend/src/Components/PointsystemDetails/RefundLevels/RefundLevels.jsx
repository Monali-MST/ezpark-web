import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RefundLevels.css";
import refundImg from "../../../Assets/refunds_picture.png";

const RefundLevels = () => {
  const [Refund_Levels, setRefund_Levels] = useState([]);
  useEffect(() => {
    const fetchAllRefund_Levels = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/user/getrefund_level");
        setRefund_Levels(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRefund_Levels();
  }, []);

  const colorList = ["#fdaf06", "#8740e4", "#cf782c"];

  return (
    <section id="refunds">
      <div className="Refunds">
        <div className="title-bar">
          <div className="title">Refunds</div>
        </div>

        <div className="cont">
          <img className="Refunds-img" src={refundImg} alt="Silver" />
          <div className="level-section">
            <div className="level-title">How much refund can I get?</div>
            {Refund_Levels.map((Refund_Level, index) => (
              <div key={Refund_Level.Refund_level_id}>
                <div className="badge-levels">
                  <div
                    className="bronze-badge-level"
                    style={{ backgroundColor: colorList[index] }}
                  >
                    <h3>{Refund_Level.Refund_Days_Range}</h3>
                    <h3>{Refund_Level.Refund_percentage}% Refund</h3>
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

export default RefundLevels;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Points.css";
import pointImg from "../../../Assets/point_picture.png";

const Points = () => {
  const [pointActions, setpointActions] = useState([]);
  useEffect(() => {
    const fetchAllPoints = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/user/getpointActions");
        setpointActions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPoints();
  }, []);

  const colorList = ["#fdaf06", "#8740e4", "#8740e4", "#8740e4", "#cf782c"];

  return (
    <section id ="points">
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
              EZ Points are EZ Park currency to level up your Badges and to get
              Discounts. When you register on EZ Park, you are immediately
              awarded with 2 EZ Points. As you continue to Book more parking
              slots, you earn more EZ Points. Earn more EZ Points and Enjoy the
              parking.
            </p>
          </div>

          <div className="description-title">
            <p>How can I earn EZ Points?</p>
          </div>
          <div className="pointAction">
            {pointActions.map((pointAction, index) => (
              <div key={pointAction.Action_ID}>
                <div
                  className="bronze-badge-level"
                  style={{ backgroundColor: colorList[index] }}
                >
                  <h3>{pointAction.UserAction}</h3>
                  <h3>{pointAction.NoOfPoints_PerHour} Points</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Points;

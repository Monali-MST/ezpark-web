import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Badges.css";
import Bronze from "../../../Assets/bronze.png";
import Gold from "../../../Assets/gold.png";
import Silver from "../../../Assets/silver.png";

const Badges = () => {
  const [badges, setBadges] = useState([]);
  useEffect(() => {
    const fetchAllBadges = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/user/getbadges");
        setBadges(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBadges();
  }, []);

  const colorList = ["#fdaf06", "#8740e4", "#cf782c"];

  return (
    <main id="badges">
      <div className="badges">
        <div className="title-bar">
          <div className="title">EZ Badges</div>
        </div>

        <div className="badge-list">
          <div className="b-card">
            <img className="badge-img" src={Bronze} alt="Bronze" />
            <div className="badge-title bronze ">Bronze Badge</div>
          </div>

          <div className="b-card">
            <img className="badge-img" src={Gold}  alt="Gold" />
            <div className="badge-title gold ">Gold Badge</div>
          </div>

          <div className="b-card">
            <img className="badge-img" src={Silver} alt="Silver" />
            <div className="badge-title silver ">Silver Badge</div>
          </div>
        </div>
        <div className="cont">
          <div className="level-section">
            <div className="level-title">How Can I get these Badges?</div>
            {badges.map((badge, index) => (
              <div key={badge.Badge_ID}>
                <div className="badge-levels">
                  <div
                    className="bronze-badge-level"
                    style={{ backgroundColor: colorList[index] }}
                  >
                    <h3>{badge.Badge_Name}</h3>
                    <h3>At least {badge.Minimum_Points}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Badges;

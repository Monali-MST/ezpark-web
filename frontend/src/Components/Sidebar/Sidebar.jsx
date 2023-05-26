import React, { useState } from "react";
import '../Sidebar/Sidebar.css';
import {
  FaTh,
  FaBars,
  FaCarAlt,
  FaUserAlt,
  FaRegEdit,
  FaRegCommentAlt,
  FaRegCheckSquare,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({Children}) => {
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen)
  const menuItem = [
    {
      path: "/userdashboard/:id",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About Us",
      icon: <FaUserAlt />,
    },
    {
      path: "/myaccount",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/booking",
      name: "Bookings",
      icon: <FaRegEdit />,
    },
    {
      path: "/chat",
      name: "Chat",
      icon: <FaRegCommentAlt />,
    },
    {
      path: "/mybooking",
      name: "My Bookings",
      icon: <FaRegCheckSquare />,
    },
    {
      path: "/supoort",
      name: "Support",
      icon: <FaRegQuestionCircle />,
    },
    {
      path: "/vehicledetails",
      name: "Vehicle Details",
      icon: <FaCarAlt />,
    },
  ];
  return (
    <div className="container">
      <div style={{width:isOpen ?"250px":"50px"}} className="sidebar">
        <div className="top_section">
            <h1 style={{display:isOpen ?"block":"none"}} className="logo">EzPark</h1>
            <div style={{marginLeft:isOpen ?"50px":"0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
        menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>  
              <div style={{display:isOpen ?"block":"none"}} className="link_text">{item.name}</div>  
            </NavLink>
        ))
        }
      </div>
      <main>{Children}</main>
    </div>
  );
};

export default Sidebar;

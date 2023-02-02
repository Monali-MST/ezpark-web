import React from "react";
import Logo from "../../Assets/logo_without_text.png";
import "./NavBarAdmin.css";
import { BsFillCalendarMinusFill } from "react-icons/bs";

const NavBarAdmin = () => {
  const input_items = [
    {
      tNumber: "1",
      icon: <BsFillCalendarMinusFill className="image"/>,
      discription: "Slot C-8(WP CBj-2233)",
      timer: "sdg",
      remove: "sgdg",
      penalty: "Button",
    },

    {
      tNumber: "2",
      icon: <BsFillCalendarMinusFill className="image"/>,
      discription: "Slot C-9(WP CBj-2783)",
      timer: "sdg",
      remove: "sgdg",
      penalty: "Button",
    },

    {
      tNumber: "3",
      icon: <BsFillCalendarMinusFill className="image"/>,
      discription: "Slot C-7(WP CBj-2733)",
      timer: "sdg",
      remove: "sgdg",
      penalty: "Button",
    },

    {
      tNumber: "4",
      icon: <BsFillCalendarMinusFill className="image"/>,
      discription: "Slot A-8(WP YTj-2233)",
      timer: "sdg",
      remove: "sgdg",
      penalty: "Button",
    },

    {
      tNumber: "5",
      icon: <BsFillCalendarMinusFill className="image"/>,
      discription: "Slot D-8(WP CBj-2233)",
      timer: "sdg",
      remove: "sgdg",
      penalty: "Button",
    },

    {
      tNumber: "6",
      icon: <BsFillCalendarMinusFill className="image"/>,
      discription: "Slot B-5(WP CBj-2584)",
      timer: "sdg",
      remove: "sgdg",
      penalty: "Button",
    },

    


  ];

  const items = input_items.map((item) => (
    <table>
        <tr>
          <td className="no">{item.tNumber}</td>
          <td className="icon">{item.icon}</td>
          <td>{item.discription}</td>
          <td>{item.timer}</td>
          <td>{item.remove}</td>
          <td>{item.penalty}</td>
        </tr>
      </table>
  ));



  return (
    <section>
      <div className="header ">
        <div className="logo-img">
          <img className="logo" src={Logo} />
          <span className="yell">EZ </span>
          <span className="blk">Park</span>
        </div>
        <div>
          <p>Mr.Pehan Basuru </p>
          <p className="admin">Super Admin</p>
        </div>
      </div>
      <div className="box-1">
        <h1>Booking</h1>
        <div className="box-2">
    
        {items}
        </div>  
      </div>
     
      <div className="box-3">
      <h1>gfffff</h1>
      
      <div className="box-4">
      <div className="box-5">


        
        </div>
      
      </div>
      </div>
      
    </section>
  );
};

export default NavBarAdmin;

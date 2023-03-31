import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="top-bar">
      <form className="nosubmit">
        <input className="nosubmit" type="search" placeholder="Search..." />
      </form>
      <div>
        <img src={require("../../assets/images/cart.png")} alt="" />
        <img src={require("../../assets/images/notification.png")} alt="" />
      </div>
    </div>
  );
}

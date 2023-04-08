import React, { useContext } from "react";
import "./navbar.css";
import { ScrollContext } from "../Scroll";

const FixedNavbar = () => {
  const { scrolled } = useContext(ScrollContext);
  return (
    <div className={`top-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-detail">
        <form className="nosubmit">
          <input className="nosubmit" type="search" placeholder="Search..." />
        </form>
        <div>
          <div className="cart-icon-wrapper">
            <img
              src={require("../../assets/images/cart.png")}
              alt="cart icon"
            />
            <span className="badge">1</span>
          </div>
          <div className="cart-icon-wrapper">
            <img
              src={require("../../assets/images/notification.png")}
              alt="notification icon"
            />
            <span className="badge">9+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedNavbar;

import React, { useState, useEffect } from "react";
import "./navbar.css";

const FixedNavbar = () => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`top-bar ${isFixed ? "fixed" : ""}`}
    >
      <div className="nav-detail">
        <form className="nosubmit">
          <input className="nosubmit" type="search" placeholder="Search..." />
        </form>
        <div>
          <img src={require("../../assets/images/cart.png")} alt="cart icon" />
          <img
            src={require("../../assets/images/notification.png")}
            alt="notification icon"
          />
        </div>
      </div>
    </header>
  );
};

export default FixedNavbar;

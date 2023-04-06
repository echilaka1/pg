import React, { useState, useEffect } from "react";
import "./navbar.css";

const FixedNavbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementsByClassName("hero-container")[0];
    const handleScroll = () => {
      if (window.pageYOffset > heroSection.offsetHeight && !isFixed) {
        setIsFixed(true);
      } else if (window.pageYOffset <= heroSection.offsetHeight && isFixed) {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return (
    <header style={{ position: "relative" }}>
      <div
        className={`top-bar ${isFixed ? "fixed" : ""}`}
        style={{
          backgroundColor: isFixed ? "white" : "transparent",
          boxShadow: isFixed ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
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
    </header>
  );
};

export default FixedNavbar;

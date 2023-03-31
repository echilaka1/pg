import React from "react";
import "./backbone.css";

export default function Layout({ children }) {
  return (
    <div className="main-container">
      <div className="sub-container">{children}</div>
    </div>
  );
}

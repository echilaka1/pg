import React, { useState } from "react";
import "./tab.css";

const Tabs = ({children}) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div className="tab-links">
        <button
          className={`tab-link ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          About Item
        </button>
        <button
          className={`tab-link ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          Reviews
        </button>
       
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && (
          <div className="tab">
            {children}
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="tab">
            No content
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;

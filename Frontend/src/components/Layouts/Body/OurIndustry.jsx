import React, { useState } from "react";
import { motion } from "framer-motion";
import "./OurIndustry.css";

const tabs = [
  { title: "Retail & E-commerce" },
  { title: "Healthcare" },
  { title: "Travel & Hospitality" },
  { title: "Banking & Insurance" },
  { title: "Fitness & Wellness" },
  { title: "Education" },
];

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  return (
    <div className="tab-container">
      {/* Tab Bar */}
      <motion.div className="tab-bar" layout>
        {tabs.map((tab) => (
         <motion.div
         key={tab.title}
         className={`tab-item ${activeTab === tab.title ? "active" : ""}`}
         onClick={() => setActiveTab(tab.title)}
         whileTap={{ x: -80  }} 
         initial={{ originX:0}} 
         animate={{ x: 0 }} 
         transition={{ type: "spring", stiffness:120, mass:0.5, damping:40 }}
         
       >
         {tab.title}
       </motion.div>
       
       
       
        ))}
      </motion.div>

      {/* Active Indicator (Button Effect) */}
      <motion.div
        layoutId="underline"
        className="active-indicator"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        animate={{
          x: tabs.findIndex((tab) => tab.title === activeTab) * 130, // Adjust based on button width
        }}
      />

      {/* Tab Content */}
      <motion.div
        className="tab-content"
        key={activeTab}
        initial={{ opacity: 0, x: "100vh", y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="content-panel">{activeTab} Content Goes Here</div>
      </motion.div>
    </div>
  );
};

export default TabBar;

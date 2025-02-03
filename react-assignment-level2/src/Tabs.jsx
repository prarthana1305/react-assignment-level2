// Tabs.jsx
import { useState } from "react";
import MoodTracker from "./MoodTracker";
import React from 'react'


function Tabs() {
  const [activeTab, setActiveTab] = useState("moodList");

  return (
    <div className="flex flex-col">
      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b-2 mb-4">
        <button
          onClick={() => setActiveTab("moodList")}
          className={`px-6 py-3 ${activeTab === "moodList" ? "border-b-4 border-blue-500 font-bold" : ""} cursor-pointer`}
        >
          Mood List
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`px-6 py-3 ${activeTab === "analytics" ? "border-b-4 border-blue-500 font-bold" : ""} cursor-pointer`}
        >
          Mood Analytics
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "moodList" ? (
          <MoodTracker />
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold">Analytics Coming Soon!</h2>
            <p className="text-gray-500">This is a placeholder for mood analytics.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;

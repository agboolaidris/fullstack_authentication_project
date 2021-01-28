import React from "react";
import Profile from "./Profile/Profile";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="profile">
        <Profile />
      </div>
      <div className="post"></div>
      <div className="friend"></div>
    </div>
  );
}

export default Dashboard;

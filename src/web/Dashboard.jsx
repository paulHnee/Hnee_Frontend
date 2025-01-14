import React from "react";
import VPN from "./VPN";
const Dashboard = () => {
  const token = localStorage.getItem("authToken");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard!</h1>
      {token ? (
        <><p className="mt-4">You are logged in. Your token: {token}</p><VPN /></>
      ) : (
        <p className="mt-4 text-red-500">You are not authenticated.</p>
      )}
    </div>
  );
};

export default Dashboard;

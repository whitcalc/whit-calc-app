import React from "react";
import Heading from "./components/heading";
import DashboardCards from "./components/dashboard-cards";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <Heading>Dashboard</Heading>
      <p>Welcome to the dashboard! Here you can find all the information you</p>
      <DashboardCards></DashboardCards>
    </div>
  );
}

export default DashboardPage;

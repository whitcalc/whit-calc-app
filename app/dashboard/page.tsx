import React from "react";
import Heading from "./components/heading";
import Logo from "@/components/logo";
import TestCard from "./components/test-card";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 text-center justify-center h-screen">
      <Logo className="flex items-center flex-col" />
      <div className="w-2/6 mx-auto">
        <Heading>Readyness Check</Heading>
        <p>
          Hey ther! Please choose the option that best describes your current
          situation.
        </p>
      </div>
      <div className="flex gap-2 flex-col w-1/5 mx-auto">
        <TestCard title="Math" link="/math"></TestCard>
        <TestCard title="Chem" link="/chem"></TestCard>
        <TestCard title="Both" link="/both"></TestCard>
      </div>
    </div>
  );
}

export default DashboardPage;

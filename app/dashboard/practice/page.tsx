import React from "react";
import TestCard from "../components/test-card";

function PracticeTestsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
      <TestCard title="Test Card" description="This is a test card."></TestCard>
    </div>
  );
}

export default PracticeTestsPage;

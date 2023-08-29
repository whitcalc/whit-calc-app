import { AtomIcon, CpuIcon, TrophyIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const cards = [
  {
    name: "Practice Exams",
    href: "/dashboard/practice",
    icon: AtomIcon,
    description: "Practice exams are a great way to prepare for the real exam.",
  },
  {
    name: "Exams",
    href: "/dashboard/exams",
    icon: CpuIcon,
    description: "Take the real exam here.",
  },
  {
    name: "Results",
    href: "/dashboard/results",
    icon: TrophyIcon,
    description: "View your results here.",
  },
];

function DashboardCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        return (
          <Link href={card.href} key={card.name}>
            <div className="p-4 h-full bg-white hover:bg-secondary hover:cursor-pointer border rounded-lg shadow text-center flex flex-col items-center gap-2 ">
              <div className="w-24 h-24 bg-red-700 flex items-center justify-center rounded-full">
                <card.icon className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                {card.name} (6/10)
              </h2>
              <p className="text-foreground/50">{card.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default DashboardCards;

import React from "react";
import Heading from "./components/heading";
import Logo from "@/components/logo";
import TestCard from "./components/test-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOutIcon } from "lucide-react";

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
        <TestCard title="Mathmatics" link="/math"></TestCard>
        <TestCard title="Chemstry" link="/chem"></TestCard>
        <TestCard title="Both of them" link="/both"></TestCard>

        <Button variant={"outline"} asChild>
          <Link href="/api/auth/signout">
            <LogOutIcon className="w-4 h-4 mr-2" />
            Log out
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default DashboardPage;

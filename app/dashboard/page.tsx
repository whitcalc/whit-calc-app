import React from "react";
import Heading from "./components/heading";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <Heading>Readyness Check</Heading>
      <p>
        Hey ther! Please choose the option that best describes your current
        situation.
      </p>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Choose Exam</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Here are 3 Exam Types, which one is best suitable for you?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Please choose one of the options below.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex flex-col items-center gap-2 w-full">
              <Button asChild>
                <Link href={"/dashboard/math"} className="w-full">
                  Math Test
                </Link>
              </Button>
              <Button asChild>
                <Link href={"/dashboard/chem"} className="w-full">
                  Chemistry Test
                </Link>
              </Button>
              <Button asChild>
                <Link href={"/dashboard/both"} className="w-full">
                  Both of the Tests
                </Link>
              </Button>
              <hr />
              <AlertDialogCancel>Close</AlertDialogCancel>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default DashboardPage;

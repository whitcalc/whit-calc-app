import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";
import React from "react";
import { SignOutButton } from "../dashboard/page";

function ResultPage({ searchParams }: { searchParams: any }) {
  console.log(searchParams);
  const percentage = Math.floor(
    (searchParams.score / searchParams.total) * 100
  );
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 max-w-xs">
            <CheckCircle className="w-12 h-12" />
            {searchParams.test} test completed!
          </CardTitle>
          <CardDescription className="max-w-xs">
            You have completed the {searchParams.test} test. Your test score is{" "}
            {searchParams.score} out of {searchParams.total}
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex flex-col gap-2">
          Your score is {percentage}%.
          <Progress value={percentage} />
          <hr />
          <SignOutButton />
        </CardFooter>
      </Card>
    </div>
  );
}

export default ResultPage;

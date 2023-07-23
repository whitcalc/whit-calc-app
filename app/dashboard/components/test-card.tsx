import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type TestCardProps = {
  title: string;
  description: string;
};

function TestCard(props: TestCardProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <Button>Start the test</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default TestCard;

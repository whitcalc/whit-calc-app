import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

type TestCardProps = {
  title: string;
  link: string;
};

function TestCard(props: TestCardProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href={props.link}>Begin</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default TestCard;

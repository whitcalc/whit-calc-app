import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">Begin</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  <h2 className="text-2xl text-foreground">
                    Before you start, please make sure you have the following
                  </h2>
                  <ul>
                    <li>- Calculator provided</li>
                    <li>- Pen and pencil</li>
                    <li>- Provided sheets of papers</li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button className="w-full" asChild>
                  <a href={props.link}>Yes begin the test!</a>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
}

export default TestCard;

"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";

type TestCardProps = {
  title: string;
  instructions: string;
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
                <DialogDescription>
                  <div className="markdown">
                    <ReactMarkdown>{props.instructions}</ReactMarkdown>
                  </div>
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

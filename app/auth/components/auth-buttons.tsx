"use client";
import { Button } from "@/components/ui/button";
import React from "react";

function AuthButtons() {
  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => {
          console.log("clicked");
        }}
        className="w-full"
      >
        Continue with GitHub
      </Button>
    </>
  );
}

export default AuthButtons;

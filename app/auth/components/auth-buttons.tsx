"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

function AuthButtons() {
  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => {
          signIn("github");
        }}
        className="w-full"
      >
        Continue with GitHub
      </Button>
    </>
  );
}

export default AuthButtons;

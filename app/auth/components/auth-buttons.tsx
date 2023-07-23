"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2Icon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

function AuthButtons() {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  async function handleSignIn() {
    setLoading(true);
    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => {
          handleSignIn();
        }}
        className="w-full"
        isLoading={loading}
      >
        {loading ? <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> : null}
        Continue with GitHub
      </Button>
    </>
  );
}

export default AuthButtons;

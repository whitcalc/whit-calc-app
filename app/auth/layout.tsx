import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import AuthButtons from "./components/auth-buttons";
import { CheckSession } from "@/components/redirect";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-8">
      <CheckSession>
        <Logo />
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
          <CardFooter>
            <AuthButtons />
          </CardFooter>
        </Card>
      </CheckSession>
    </div>
  );
}

export default AuthLayout;

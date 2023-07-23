"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

function UserNav() {
  const { data, status } = useSession();
  return (
    <div>
      <h1>Hello {data?.user?.name ?? "User"}</h1>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </Button>
    </div>
  );
}

export default UserNav;

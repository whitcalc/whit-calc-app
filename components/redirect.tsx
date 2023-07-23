"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function CheckSession({ children }: { children: React.ReactNode }) {
  const { data, status } = useSession();
  const [route, setRoute] = useState("");
  useEffect(() => {
    if (window.location.pathname === "/auth/signin") {
      setRoute("signin");
    }
  }, [route]);
  const router = useRouter();
  if (route === "signin") {
    if (status === "authenticated") {
      if (data) {
        router.push("/dashboard");
      }
    }
  } else if (status === "unauthenticated") {
    router.push("/auth/signin");
  }
  return <>{children}</>;
}

export { CheckSession };

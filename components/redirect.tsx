"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function CheckSession({ children }: { children: React.ReactNode }) {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    if (data) {
      router.push("/dashboard");
    }
  }
  return <>{children}</>;
}

export { CheckSession };

"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/logo";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);
  return (
    <main className="flex flex-col items-center justify-center h-screen max-w-5xl mx-auto">
      <Logo className="flex items-center justify-center"></Logo>
      <h1 className="text-4xl font-bold">Whitworth Readyness Check!</h1>
    </main>
  );
}

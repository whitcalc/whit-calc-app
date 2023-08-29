"use client";
import { useEffect, useState } from "react";
import Heading from "./components/heading";
import Logo from "@/components/logo";
import TestCard from "./components/test-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOutIcon } from "lucide-react";
import { Test } from "@/types/test";
import "@/styles/markdown.css";

export default function DashboardPage() {
  const [exams, setExams] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getExams = async () => {
      try {
        const res = await fetch("https://uwussimo.jprq.live/api/quizzes/").then(
          (res) => res.json()
        );
        setExams(res);
        setLoading(false);
        console.log(res);
      } catch {
        return null;
      }
    };
    getExams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setExams]);

  return (
    <div className="flex flex-col gap-6 text-center justify-center h-screen p-5">
      <Logo className="flex items-center flex-col" />
      <div className="md:w-2/6 mx-auto items-center flex flex-col">
        <Heading>Readiness Check</Heading>
        <p className="max-w-md">
          Greetings! Please choose one of the following options to start the
          test.
        </p>
      </div>
      <div className="flex gap-2 flex-col w-full md:w-2/5 lg:w-1/5 mx-auto">
        {loading && (
          <div
            role="status"
            className="flex min-h-[200px] p-5 border items-center justify-center"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}

        {exams &&
          exams.map((test: Test) => (
            <TestCard
              key={test.id}
              title={test?.title || "Math"}
              link={`/test/${test.slug}`}
              instructions={test?.instructions || "Test description"}
            ></TestCard>
          ))}
        <Button variant={"outline"} asChild>
          <Link href="/api/auth/signout">
            <LogOutIcon className="w-4 h-4 mr-2" />
            Log out
          </Link>
        </Button>
      </div>
    </div>
  );
}

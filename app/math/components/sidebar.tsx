/* eslint-disable @next/next/no-img-element */

import Logo from "@/components/logo";
import { classNames } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

async function Sidebar() {
  const navigation = [
    {
      id: 1,
      question: "1 + 1 = ?",
      answers: [
        {
          id: 1,
          answer: "2",
          isCorrect: true,
        },
        {
          id: 2,
          answer: "3",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "4",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      question: "1^2+12/2",
      answers: [
        {
          id: 1,
          answer: "2",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "3",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "14/2",
          isCorrect: true,
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Logo />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item: any) => (
                  <li key={item.id}>
                    <Link
                      href={"#" + item.id}
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-red-600"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <LayoutDashboard
                        className={classNames(
                          item.current
                            ? "text-red-600"
                            : "text-gray-400 group-hover:text-red-600",
                          "h-6 w-6 shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.id} question
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;

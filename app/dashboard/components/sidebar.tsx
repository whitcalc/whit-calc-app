/* eslint-disable @next/next/no-img-element */

import Logo from "@/components/logo";
import { classNames } from "@/lib/utils";
import {
  CpuIcon,
  LayoutDashboard,
  Settings2Icon,
  TrophyIcon,
} from "lucide-react";
import Link from "next/link";

const navigation = [
  {
    name: "Readyness Check",
    href: "/dashboard",
    icon: LayoutDashboard,
    current: true,
  },
];

function Sidebar() {
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
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-red-600"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-red-600"
                            : "text-gray-400 group-hover:text-red-600",
                          "h-6 w-6 shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <a
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-red-600"
              >
                <Settings2Icon
                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;

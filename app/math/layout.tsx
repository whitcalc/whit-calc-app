import { Button } from "@/components/ui/button";
import Sidebar from "./components/sidebar";
import { UserNav } from "./components/user-nav";
import { CheckIcon, TicketIcon } from "lucide-react";
import Timer from "./components/timer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div className="hidden border-r lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <Sidebar />
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            {/* Separator */}
            <h2 className="flex-1 text-lg font-medium leading-6 text-gray-900">
              Test is in progress
            </h2>
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex-1"></div>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <Timer expiresAt={1692138435694} />
                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                ></div>
                <Button variant={"destructive"}>
                  <CheckIcon className="w-4 h-4 mr-2" /> Finish Test
                </Button>
                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                ></div>
                {/* Profile dropdown */}
                <UserNav />
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

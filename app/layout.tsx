import "./globals.css";
import "katex/dist/katex.min.css";
import AuthProvider from "@/components/providers/auth-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CheckSession } from "@/components/redirect";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whitworth Calculus Testing",
  description:
    "A testing platform for calculus students at Whitworth University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CheckSession>
            {children}
            <Toaster />
          </CheckSession>
        </AuthProvider>
      </body>
    </html>
  );
}

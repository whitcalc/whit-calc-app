import AuthProvider from "@/components/providers/auth-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CheckSession } from "@/components/redirect";

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
          <CheckSession>{children}</CheckSession>
        </AuthProvider>
      </body>
    </html>
  );
}

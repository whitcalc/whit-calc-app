import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    id: string;
    timers: any[];
    first_name: string;
    last_name: string;
    email: string;
    score: number;
    total: number;
    percentage: number;
    date: string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: string;
    timers: any[];
    first_name: string;
    last_name: string;
    email: string;
    score: number;
    total: number;
    percentage: number;
    date: string;
  }
}

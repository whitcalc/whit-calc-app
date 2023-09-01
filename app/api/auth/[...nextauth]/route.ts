import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { v4 } from "uuid";
import { UserLoginResponseBody } from "@/types/auth";

const login = async (values: any) => {
  return await fetch("https://whitworth.ainsoft.org/api/results/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: values.firstname,
      last_name: values.lastname,
      email: values.email,
    }),
  });
};

const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Credentials({
      name: "42Native",
      credentials: {
        passcode: {
          label: "Passcode",
        },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const res = await login(credentials);

        if (res.ok) {
          const user = (await res.json()) as UserLoginResponseBody;
          return {
            id: user.id,
            accessToken: v4(),
            refreshToken: v4(),
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            score: user.score,
            total: user.total,
            percentage: user.percentage,
            date: user.date,
            timers: user.timers,
          };
        } else {
          throw new Error(JSON.stringify(await res.json()));
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user = token;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const { id, email, ...userData } = user;
        token = { ...token, ...userData, id: id.toString(), email: email };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

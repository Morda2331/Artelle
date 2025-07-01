// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub!;
      return session;
    },
  },
};

// Для App Router обязательно экспортировать методы:
export const GET  = NextAuth(authOptions);
export const POST = NextAuth(authOptions);

/*
    /auth/[...nextauth]/route.js

    authentication for reaching admin page for the website
*/

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const isAdmin = credentials.username === process.env.ADMIN_USER && credentials.password === process.env.ADMIN_PASS;
        if (isAdmin) {
          return { id: "1", name: "Admin User" };
        }
        return null;
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

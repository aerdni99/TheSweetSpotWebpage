/*
    lib/auth.js

    authOptions for NextAuth
*/

import CredentialsProvider from "next-auth/providers/credentials";

/** @type {import("next-auth").NextAuthOptions} */
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.username === "admin" && credentials?.password === "password") {
          return { id: "1", name: "Admin User" };
        }
        return null; // Login fails if credentials are incorrect
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
};


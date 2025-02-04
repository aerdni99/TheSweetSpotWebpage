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
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
};


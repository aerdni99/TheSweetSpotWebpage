/*
    /auth/[...nextauth]/route.js

    authentication for reaching admin page for the website
*/

import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const isAdmin = credentials.username === process.env.ADMIN_USER && credentials.password === process.env.ADMIN_PASS;
        if (isAdmin) {
          return { id: "1", name: "Admin User" };
        }
        return null;
      }
    }),
  ],
  pages: {
    signIn: "/admin/login", // Change this to a valid route
  },
});

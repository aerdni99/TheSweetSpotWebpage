/*
    providers.js

    session provider is required to use useSession() which I want to use for admin logins
*/

"use client";

import { SessionProvider } from "next-auth/react";

export function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

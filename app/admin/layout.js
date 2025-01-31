/*
    app/admin/layout.js

    The base layout of the admin page will be different from the layout of the main band page.
    This also allows me to make session providers wrap only the admin page instead of the entire application.
*/

import { SessionProvider } from "next-auth/react";

export default function AdminLayout({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

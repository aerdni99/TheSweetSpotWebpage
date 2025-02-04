/*
    admin/page.js

    Default landing page for administrative functions for The Sweet Spot webpage
*/

import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth.js";
import { redirect } from "next/navigation";
import LogoutButton from './Components/logoutButton.js';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    console.log("Admin logging out...");
    redirect("/admin/login");
  }

  return (
    <div>
      <h1 className="neonText">Admin Page</h1>
      <LogoutButton />
      {/* Add your admin controls here */}
    </div>
  );
}

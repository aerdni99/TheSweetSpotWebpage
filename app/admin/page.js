/*
    admin/page.js

    Default landing page for administrative functions for The Sweet Spot webpage
*/

import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth.js";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div>
      <h1>WE HAVE A VALID SESSION!!</h1>
      {/* <h1>Welcome, {session.user.name}</h1> */}
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
      {/* Add your admin controls here */}
    </div>
  );
}

/*
    admin/page.js

    Default landing page for administrative functions for The Sweet Spot webpage
*/

import { useSession, signIn, signOut } from 'next-auth/react';

export default function AdminPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>Admin Login</h1>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
      {/* Add your admin controls here */}
    </div>
  );
}

/*
    admin/page.js

    Default landing page for administrative functions for The Sweet Spot webpage
*/

"use client";

import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      retirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function AdminPage() {
  return (
    <div>
      <h1>WE HAVE A VALID SESSION!!</h1>
      {/* <h1>Welcome, {session.user.name}</h1> */}
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
      {/* Add your admin controls here */}
    </div>
  );
}

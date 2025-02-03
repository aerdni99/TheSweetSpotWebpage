/*
    logoutButton.js

    Component for my lockdown button allows me to have a client side component on my server side admin page. this is necessary for functions that listen for user interaction
*/

"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button onClick={() => signOut({ callbackUrl: "/" })} className="">Log Out</button>
    )
}

/*
    logoutButton.js

    Component for my lockdown button allows me to have a client side component on my server side admin page. this is necessary for functions that listen for user interaction
*/

"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export default function LogoutButton() {
    const [isLoading, setIsLoading] = useState(false);

    function logOut() {
        setIsLoading(true);
        signOut({ callbackUrl: "/" });
    }


    return (
        <button onClick={logOut} disabled={isLoading} className="">{isLoading ? "Logging Out..." : "Log Out"}</button>
    )


}

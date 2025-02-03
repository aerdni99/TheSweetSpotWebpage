/*
    admin/login/page.js

    login page for admin users of the webpage.
    creating a separate login page because nextauth is hard to debug and I need to start from scratch and have a better handle on this login authentication process
*/

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function adminLogin() {
    const router = useRouter();
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const result = await signIn("credentials", {
            redirect: false,
            username: credentials.username,
            password: credentials.password,
        });

        if (result?.error) {
            setError("Invalid username or password");
        } else {
            router.push("/admin");
        }
    }

    return (
        <div>
            <h1 className='neonText'>Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="neonText">
                <input
                    type="text"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className = ""
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className=""
                />
                <button type="submit" className="">Login</button>
            </form>
        </div>
    );
}

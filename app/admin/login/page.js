/*
    admin/login/page.js

    login page for admin users of the webpage.
    creating a separate login page because nextauth is hard to debug and I need to start from scratch and have a better handle on this login authentication process
*/

"use client";

import { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function adminLogin() {
    const router = useRouter();
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = useCallback((e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        const result = await signIn("credentials", {
            redirect: false,
            username: credentials.username,
            password: credentials.password,
        });

        if (result?.error) {
            setError("Invalid username or password");
            setIsLoading(false);
        } else {
            router.push("/admin");
        }
    }

    return (
        <div>
            <h1 className='neonText'>Login</h1>
            {error && <p className="neonText">{error}</p>}
            <form onSubmit={handleSubmit} className="neonText">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    className = ""
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    className=""
                />
                <button type="submit" disabled={isLoading} className="">{isLoading ? "Logging in..." : "Login"}</button>
            </form>
        </div>
    );
}

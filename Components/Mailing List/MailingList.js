/*
    MailingList.js

    Component file for the mailing list component
*/

"use client";

import { useState } from "react";

export default function MailingList() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted: ", email);
    }
    return (
        <div className="flex flex-col items-center drop-shadow-[0_0_10px_#f7e] neonText" style={{ backgroundColor: '#332929' }}>
            <form 
                onSubmit={ handleSubmit } 
                className="flex flex-col items-center gap-3 p-4 max-w-sm"
            >
                <h2 className="text-2xl">Join Our Mailing List</h2>
                <div className="flex flex-row">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={ email }
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-pink-400 text-white rounded-r-md border hover:bg-pink-500 transition"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
            <p className="mb-4">
                By joining our mailing list, you agree to our 
                <a href="/privacy-policy"> Privacy Policy</a>
            </p>
        </div>
    );
}
/*
    ShowSelector.js

    This component is for the dropdown selector for cycling between different photo albums
*/

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

// This function will need passed a list of shows we've played. It will be a pair of values concatenated
// Venue + Date. 
export default function ShowSelector({ venues }) {

    // is the dropdown open or not?
    const [open, setOpen] = useState(false);

    // Currently selected venue: This needs to be initialized to a random show we have played before
    const [selected, setSelected] = useState("Britewinter - Cleveland, OH");

    const handleUpdate = async () => {
        console.log(venues);
    }

    return (
        <div className="relative w-48">
        <h1 className='neonText text-m text-center p-4'>{selected}</h1>
            <button className="bg-white text-black p-2 z-50 relative cursor-pointer"
                onClick={handleUpdate}>
                    test
                </button>
        </div>
    )
}

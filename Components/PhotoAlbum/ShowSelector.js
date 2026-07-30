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
export default function ShowSelector({ venues, onVenueChange }) {

    // is the dropdown open or not?
    const [open, setOpen] = useState(false);

    // Currently selected venue: This needs to be initialized to a random show we have played before
    const [selected, setSelected] = useState(venues[0]);

    const handleUpdate = (e) => {
        setSelected(e.target.value);
        onVenueChange(selected);
        console.log("New Venue Selected: ", e.target.value);
        e.target.blur();
        return;
    }

    return (
        <div className="flex flex-col gap-4 mx-6">
            <div className="relative w-64">
                <select 
                    value={selected}
                    onChange={handleUpdate}
                    className="neonText w-full text-black p-2 rounded border border-gray-800 cursor-pointer focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_3px_#ec4899] transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_15px_3px_#ec4899]"
                >
                    <option className='bg-gray-800' value="" disabled>Select a venue...</option>
                    {venues.map((venueName, index) => (
                        <option className='bg-gray-800' key={index} value={venueName}>
                            {venueName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

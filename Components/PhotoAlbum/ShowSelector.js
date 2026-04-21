/*
    ShowSelector.js

    This component is for the dropdown selector for cycling between different photo albums
*/

"use client";
import { useState } from "react";
import { createClient } from "../../utils/supabase/client";

// This function will need passed a list of shows we've played. It will be a pair of values concatenated
// Venue + Date. 
export default function ShowSelector() {

    const [open, setOpen] = useState(false);

    // This needs to be initialized to a random show we have played before
    const [selected, setSelected] = useState("Britewinter - Cleveland, OH");

    const supabase = createClient();
    const [data, setData] = useState([]);

    const handleUpdate = async () => {
        if (selected === "Britewinter - Cleveland, OH") {
            setSelected("The Windsor - Windsor, WI");
        } else {
            setSelected("Britewinter - Cleveland, OH");
        }
        const { incomingData } = await supabase.from('Photos').select(selected);
        setData(incomingData);
        console.log(selected);
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

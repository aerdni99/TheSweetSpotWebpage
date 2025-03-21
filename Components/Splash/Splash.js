/*
    splash.js

    Component file for splash page background image
*/

"use client";

import SocialDirectory from "../SocialMedia/SocialDirectory.js"

export default function Splash() {
    return (
        <div>
            <img
                src={"/band/splash.jpg"}
                draggable="false"
                className="select-none"
                style={{
                position:"absolute",
                width:"100vw",
                height:"100vh",
                objectFit:"cover",
                zIndex:`-2`,
                }}
            />
            <div style={{ position: "absolute", zIndex: "-1", width: "100vw", top: "50px"}}>
                <div className="border-b-2 border-t-2 border-pink-200" style={{ backdropFilter: "blur(2px)", backgroundColor: 'rgba(0, 0, 0, 0.6' }}>
                    <div className="mx-10">
                        <SocialDirectory 
                            align="justify-end" 
                            size={25}
                        />
                    </div>
                </div>
                
            </div>
            <div className="flex items-center justify-center w-[100vw] h-[100vh]">
                <img
                src='/logo.png'
                alt='Logo'
                width={470}
                height={470}
                draggable="false"
                className="select-none drop-shadow-[16px_16px_40px_rgba(0,0,0,0.9)]"
                />
            </div>
        </div>
    )
}

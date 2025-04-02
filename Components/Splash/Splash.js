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
                className="select-none h-[100vh] max-sm:h-[60vh] w-full"
                style={{
                position:"absolute",
                objectFit:"cover",
                zIndex:`-2`,
                }}
            />
            <div style={{ position: "absolute", zIndex: "2", top: "50px"}} className="w-full">
                <div className="" style={{ backdropFilter: "blur(2px)", backgroundColor: 'rgba(0, 0, 0, 0.6' }}>
                    <div className="">
                        <SocialDirectory 
                            alignRight={ true }
                            size={60}
                        />
                    </div>
                </div>
                
            </div>
            <div className="flex items-center justify-center w-full h-[100vh] max-sm:h-[60vh]">
                <img
                src='/logo.png'
                alt='Logo'
                draggable="false"
                className="select-none drop-shadow-[16px_16px_40px_rgba(0,0,0,0.9)] w-[650px] h-[650px] max-sm:w-[250px] max-sm:h-[250px]"
                />
            </div>
        </div>
    )
}

/*
    splash.js

    Component file for splash page background image
*/

"use client";

export default function Splash() {
    return (
        <div>
            <img
            src={"/band/splash.jpg"}
            draggable="false"
            className="select-none"
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              zIndex: `-1`,
              objectFit: "cover",
            }}
          />
        </div>
    )
}
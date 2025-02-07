/*
    PhotoAlbum.js

    Component for photo album on the website
*/

'use client';

import { useState, useRef, useEffect } from "react";

export default function PhotoAlbum() {
  const imgPaths = [
    '/band/chalk-clap.jpg',
    '/band/bro-sis.jpg',
    '/band/ball-above.jpg',
    '/band/cocktails.jpg',
    '/band/chalk-logo.jpg',
    '/band/bro-sis-2.jpg',
    '/band/chalk-clap-2.jpg'
  ];

  const IMAGE_WIDTH = 357; // example width of each image
  const PADDING = 4; // example padding

  // Initial positions
  const imagePositions = useRef(
    imgPaths.map((_, index) => index * (IMAGE_WIDTH + PADDING)) // Space images out by their index
  );

  const [position, setPosition] = useState(0); // The position of the whole photo album
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    lastX.current = e.clientX;
    lastTime.current = Date.now();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const deltaX = e.clientX - lastX.current;
    const deltaTime = Date.now() - lastTime.current;

    setPosition((prev) => prev + deltaX);

    lastX.current = e.clientX;
    lastTime.current = Date.now();
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="overflow-hidden w-screen"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="flex"
        style={{ transform: `translateX(${position}px)` }} // Translate the whole album container
      >
        {imgPaths.map((src, i) => (
          <img
            key={i}
            src={src}
            draggable="false"
            style={{
              width: `${IMAGE_WIDTH}px`,
              padding: `4px`,
              transform: `translateX(${imagePositions.current[i]}px)` // Position each image relative to its index
            }}
          />
        ))}
      </div>
    </div>
  );
}

/*

import { useState, useRef, useEffect } from "react";

export default function PhotoAlbum() {

    const imgPaths = [
        '/band/chalk-clap.jpg',
        '/band/bro-sis.jpg',
        '/band/ball-above.jpg',
        '/band/cocktails.jpg',
        '/band/chalk-logo.jpg',
        '/band/bro-sis-2.jpg',
        '/band/chalk-clap-2.jpg'
    ];

    const MAX_MOMENTUM = 20;
    const MAX_POSITION = 1000;

    const [position, setPosition] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const lastX = useRef(0);
    const lastTime = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
        lastX.current = e.clientX;
        lastTime.current = Date.now();
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;

        const deltaX = e.clientX - lastX.current;
        const deltaTime = Date.now() - lastTime.current;
        setVelocity(deltaX / deltaTime);

        setPosition((prev) => prev + deltaX);
        lastX.current = e.clientX;
        lastTime.current = Date.now();
    };
    
    const handleMouseUp = () => {
        isDragging.current = false;
        applyMomentum();
    };
  
    const applyMomentum = () => {
        let momentum = velocity * 100;
        momentum = Math.min(Math.max(momentum, -MAX_MOMENTUM), MAX_MOMENTUM);
    
        let previousMomentum = momentum;
    
        let interval = setInterval(() => {
            setPosition((prev) => {
                const newPos = prev + momentum;
                momentum *= 0.95;
    
                // Detect if we're at the end or beginning of the carousel
                if (newPos >= MAX_POSITION) {
                    setPosition(-MAX_POSITION); // Reset to beginning
                } else if (newPos <= -MAX_POSITION) {
                    setPosition(MAX_POSITION); // Reset to end
                }
    
                // Stop when momentum is below a threshold
                if (Math.abs(momentum) < 0.5) clearInterval(interval);
    
                return newPos;
            });
        }, 16);
    };

    return (
        <div 
            className="overflow-hidden w-screen"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div 
                className="flex w-[125vw]"
                style={{ transform: `translateX(${position}px)` }}
            >
                {imgPaths.map((src, i) => (
                <img key={i} src={src} className="w-[calc(125vw/7)] p-2" draggable="false" />
                ))}
            </div>
        </div>
    );
}

*/

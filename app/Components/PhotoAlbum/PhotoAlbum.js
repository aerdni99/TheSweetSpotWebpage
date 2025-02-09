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
    '/band/chalk-clap-2.jpg',
    '/band/cocktails.jpg',
    '/band/chalk-logo.jpg',
    '/band/bro-sis-2.jpg'
  ];

  const isDragging = useRef(false);
  const imageWidth = useRef(0);
  const padding = useRef(0);
  const totalWidth = useRef(0);
  const lastX = useRef(0);
  const [imagePositions, setImagePositions] = useState([]);

  useEffect(() => {
    imageWidth.current = 19 * window.innerWidth / 100;
    padding.current = 0.5 * window.innerWidth / 100;
    totalWidth.current = imgPaths.length * (imageWidth + padding);
    const initialPositions = imgPaths.map((_, index) => index * (imageWidth.current + padding.current));
    setImagePositions(initialPositions);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

const handleMouseMove = (e) => {
  if (!isDragging.current) return;

  const deltaX = e.clientX - lastX.current;
  lastX.current = e.clientX;

  // Move all images based on drag
  setImagePositions((prevPositions) => {
    const newPositions = prevPositions.map((pos) => pos + deltaX);

    // Check for out-of-bounds images
    return newPositions.map((pos) => {
      if (pos < -imageWidth.current) return pos + totalWidth.current; // Loop left to right
      if (pos > totalWidth.current - imageWidth.current) return pos - totalWidth.current; // Loop right to left
      return pos;
    });
  });
}


  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="relative min-h-[20vw] overflow-hidden w-full"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      draggable="false"
    >
      <div
        className="flex"
        draggable="false"
      >
        {imgPaths.map((src, i) => (
          <img
            key={i}
            src={src}
            draggable="false"
            className="select-none"
            style={{
              position: "absolute",
              transform: `translateX(${imagePositions[i]}px)`,
              width: `19vw`,
              padding: `0.5vw`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

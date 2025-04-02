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
  const albumWidth = useRef(0);
  const lastX = useRef(0);
  const [imagePositions, setImagePositions] = useState([]);
  const resizeTimer = useRef(null);

  function buildAlbum() {
    imageWidth.current = 19 * window.innerWidth / 100;
    padding.current = 0.5 * window.innerWidth / 100;
    albumWidth.current = imgPaths.length * (imageWidth.current + padding.current);
    const initialPositions = imgPaths.map((_, index) => index * (imageWidth.current + padding.current));
    setImagePositions(initialPositions);
  }

  useEffect(() => {
    buildAlbum();

    const handleResize = () => {
      clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout (() => {
        buildAlbum();
      }, 100);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer.current)
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    lastX.current = e.clientX;
  };

const handleMouseMove = (e) => {
  e.preventDefault();
  if (!isDragging.current) return;

  const deltaX = e.clientX - lastX.current;
  lastX.current = e.clientX;

  // Move all images based on drag
  setImagePositions((prevPositions) => {
    const newPositions = prevPositions.map((pos) => pos + deltaX);

    // Check for out-of-bounds images
    return newPositions.map((pos) => {
      if (pos < -imageWidth.current) return pos + albumWidth.current; // Loop left to right
      if (pos > albumWidth.current - imageWidth.current) return pos - albumWidth.current; // Loop right to left
      return pos;
    });
  });
}


  const handleMouseUp = (e) => {
    e.preventDefault();
    isDragging.current = false;
  }

  const handleMouseLeave = (e) => {
    e.preventDefault();
    isDragging.current = false;
  }

  return (
    <div>
        <div
        className="relative min-h-[20vw] overflow-hidden w-full flex cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
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

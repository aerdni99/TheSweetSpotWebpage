/*
    Photos.js

    Client side component for displaying and animating the photos
    Just receives a list of photos, displays, and animates them
*/

'use client';

import { useState, useRef, useEffect } from "react";

async function buildAlbum(albumWidth, imgs, setImagePositions) {
  // For each photo in the album, add the scaled width to the total width of the album, account for padding too. Take note of each image's initial position
  const initialPositions = [];
  albumWidth.current = 0;

  for (let i = 0; i < imgs.length; i++) {
    initialPositions[i] = albumWidth.current;
    const scalar = window.innerHeight * (3 / 10) / imgs[i].Height;
    albumWidth.current += scalar * imgs[i].Width;
    albumWidth.current += 1 * window.innerWidth / 100;
  }
  setImagePositions(initialPositions);
}

export default function Photos({ imgs }) {
  //State Vars
  const isDragging = useRef(false);
  const albumWidth = useRef(0);
  const lastX = useRef(0);
  const resizeTimer = useRef(null);
  const [imagePositions, setImagePositions] = useState([]);

  // Rebuild album on rerender (window size changes)
  useEffect(() => {

    // Don't try to build the album if the database didn't supply images to populate it
    if (!imgs || imgs.length === 0) return;

    console.log("imgs arrived:", imgs.length);
    buildAlbum(albumWidth, imgs, setImagePositions);

    const handleResize = () => {
      clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout (() => {
        buildAlbum(albumWidth, imgs, setImagePositions);
      }, 100);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer.current)
      window.removeEventListener("resize", handleResize);
    };

  }, [imgs]);

  // Image animation and looping logic  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isDragging.current) {
        setImagePositions((prevPositions) => {
          const newPositions = prevPositions.map((pos) => pos - 1);

          // Check for out-of-bounds images
          return newPositions.map((pos, i) => {
            if (pos < -imgs[i].Width) return pos + albumWidth.current; // Loop left to right
            if (pos > albumWidth.current - imgs[i].Width) return pos - albumWidth.current; // Loop right to left
            return pos;
          });
        });
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
  }

  const handleDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    lastX.current = getClientX(e);
  };

const handleMove = (e) => {
  e.preventDefault();
  if (!isDragging.current) return;

  const deltaX = getClientX(e) - lastX.current;
  lastX.current = getClientX(e);

  // Move all images based on drag
  setImagePositions((prevPositions) => {
    const newPositions = prevPositions.map((pos) => pos + deltaX);

    // Check for out-of-bounds images
    return newPositions.map((pos, i) => {
      if (pos < -imgs[i].Width) return pos + albumWidth.current; // Loop left to right
      if (pos > albumWidth.current - imgs[i].Width) return pos - albumWidth.current; // Loop right to left
      return pos;
    });
  });
}


  const handleUp = (e) => {
    e.preventDefault();
    isDragging.current = false;
  }

  const handleLeave = (e) => {
    e.preventDefault();
    isDragging.current = false;
  }

  

  return (
    <div
        className="relative min-h-[30vh] overflow-hidden w-full flex cursor-grab"
        onMouseDown={handleDown}
        onMouseMove={handleMove}
        onMouseUp={handleUp}
        onMouseLeave={handleLeave}
        onTouchStart={handleDown}
        onTouchMove={handleMove}
        onTouchEnd={handleUp}
        onTouchCancel={handleUp}
      >
        {imagePositions.length === imgs.length &&
          imgs.map((imgObj, i) => (
            <img
              key={i}
              src={imgObj.URL}
              draggable="false"
              className="select-none neon-card"
              style={{
                position: "absolute",
                transform: `translateX(${imagePositions[i]}px)`,
                height: `30vh`,
              }}
            />
          ))}
    </div>
  );
}

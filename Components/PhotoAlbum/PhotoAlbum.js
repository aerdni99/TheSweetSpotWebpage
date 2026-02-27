/*
    PhotoAlbum.js

    Component for photo album on the website
*/

'use client';

import { useState, useRef, useEffect } from "react";

function shuffleArray(array) {
  const arr = [...array]; // copy, never mutate props
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function PhotoAlbum({ imgPaths }) {

  const isDragging = useRef(false);
  const imageWidth = useRef(0);
  const padding = useRef(0);
  const albumWidth = useRef(0);
  const lastX = useRef(0);
  const [imagePositions, setImagePositions] = useState([]);
  const resizeTimer = useRef(null);
  const shuffledImgPaths = useRef(shuffleArray(imgPaths));

  function buildAlbum() {
    imageWidth.current = 24 * window.innerWidth / 100;
    padding.current = 0.5 * window.innerWidth / 100;
    albumWidth.current = imgPaths.length * (imageWidth.current + padding.current);
    const initialPositions = shuffledImgPaths.current.map(
      (_, index) => index * (imageWidth.current + padding.current)
    );
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isDragging.current) {
        setImagePositions((prevPositions) => {
          const newPositions = prevPositions.map((pos) => pos - 1);

          // Check for out-of-bounds images
          return newPositions.map((pos) => {
            if (pos < -imageWidth.current) return pos + albumWidth.current; // Loop left to right
            if (pos > albumWidth.current - imageWidth.current) return pos - albumWidth.current; // Loop right to left
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
    return newPositions.map((pos) => {
      if (pos < -imageWidth.current) return pos + albumWidth.current; // Loop left to right
      if (pos > albumWidth.current - imageWidth.current) return pos - albumWidth.current; // Loop right to left
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
    <div>
        <div
        className="relative min-h-[20vw] overflow-hidden w-full flex cursor-grab"
        onMouseDown={handleDown}
        onMouseMove={handleMove}
        onMouseUp={handleUp}
        onMouseLeave={handleLeave}
        onTouchStart={handleDown}
        onTouchMove={handleMove}
        onTouchEnd={handleUp}
        onTouchCancel={handleUp}
      >
        {imagePositions.length === shuffledImgPaths.current.length &&
          shuffledImgPaths.current.map((src, i) => (
            <img
              key={src}
              src={src}
              draggable="false"
              className="select-none"
              style={{
                position: "absolute",
                transform: `translateX(${imagePositions[i]}px)`,
                padding: `.5vw`,
                height: `40vh`,
              }}
            />
          ))}
      </div>
    </div>
  );
}

/*
    Photos.js

    Client side component for displaying and animating the photos
    Just receives a list of photos, displays, and animates them
*/

/*
    Available members of each image in the imgs array:
    URL
    Photographer
    Date
    Venue
    Description
    Height
    Width
*/

// @NOTE Let's try NOT centering the album so that repositioning logic is a little easier?

'use client';

const STANDARD_LOGGING = true;

import { useState, useRef, useEffect } from "react";

function checkBounds(pos, lBound, rBound, albumWidth) {
  if (pos < lBound) {
    return pos + albumWidth;
  }
  if (pos > rBound) {
    return pos - albumWidth;
  }
  return pos;
}

// This function takes an array of images as imput and returns an array of dimensions with standardized heights as output.
function resizePics(imgs) {

  const scaledDims = [];
  for (let i = 0; i < imgs.length; i++) {

    // Scale the size of each image.
    let w = (imgs[i].Width * 3 * window.innerHeight) / (10 * imgs[i].Height);
    scaledDims.push(w)
  }
  return scaledDims;
}

// This function sums the scaled widths as well as padding between each one
function computeAlbumWidth(scaledWidths) {
  let totalWidth = 0;
  for (let i = 0; i < scaledWidths.length; i++) {
    // Add the scaled width to the album size.
    totalWidth += scaledWidths[i];

    // Add padding to the album width
    totalWidth += (window.innerWidth / 100);
  }
  return totalWidth;
}

// This function returns an array of positions for my photos centered on screen.
function initPhotoPositions(albumWidth, scaledWidths) {
  const initialPositions = [];
  let cursor = 0;

  for (let i = 0; i < scaledWidths.length; i++) {
    initialPositions[i] = (window.innerWidth / 2) - (albumWidth / 2) + cursor;
    cursor += scaledWidths[i];
    cursor += 1 * window.innerWidth / 100;
  }
  return initialPositions;
}

export default function Photos({ imgs }) {
  //State Vars
  const isDragging = useRef(false);
  const albumWidth = useRef(0);
  const lastX = useRef(0);
  const resizeTimer = useRef(null);

  // scaledWidths contains an array of scaled photograph widths
  const [scaledWidths, setScaledWidths] = useState([]);
  const scaledWidthsRef = useRef(scaledWidths);
  const [imagePositions, setImagePositions] = useState([]);

  // Rebuild album on rerender (window size changes, image array changes, venue selection change)
  useEffect(() => {

    // Don't try to build the album if the database didn't supply images to populate it
    if (!imgs || imgs.length === 0) return;

    if (STANDARD_LOGGING) console.log("imgs arrived:", imgs.length);
    const updateLayout = () => {

      const dims = resizePics(imgs);
      const totalWidth = computeAlbumWidth(dims);
      const positions = initPhotoPositions(totalWidth, dims);

      albumWidth.current = totalWidth;
      setScaledWidths(dims);
      setImagePositions(positions);
    }

    updateLayout();

    const handleResize = () => {
      clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(updateLayout, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer.current)
      window.removeEventListener("resize", handleResize);
    };

  }, [imgs]);

  useEffect(() => {
    scaledWidthsRef.current = scaledWidths;
  }, [scaledWidths]);

  // Image animation and looping logic  
  useEffect(() => {
    const leftBoundary = (window.innerWidth / 2) - (albumWidth.current / 2);
    const rightBoundary = (window.innerWidth / 2) + (albumWidth.current / 2);

    if (STANDARD_LOGGING) {
      console.log(`Album Width: ${albumWidth.current}`);
      console.log(`Screen Width: ${window.innerWidth}`);
      console.log(`Left Bound: ${leftBoundary}`);
      console.log(`Right Bound: ${rightBoundary}`);
    }

    const intervalId = setInterval(() => {
      if (!isDragging.current) {
        setImagePositions((prevPositions) => {
          const newPositions = prevPositions.map((pos) => pos - 1);
          const currentWidths = scaledWidthsRef.current;

          // Check for out-of-bounds images
          return newPositions.map((pos, i) => {
            const imageWidth = currentWidths[i] || 0;
            return checkBounds(pos, leftBoundary, rightBoundary, albumWidth.current);
          });
        });
      }
    }, 100);

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
      const leftBoundary = (window.innerWidth / 2) - (albumWidth.current / 2);
      const rightBoundary = (window.innerWidth / 2) + (albumWidth.current / 2);
      const currentWidths = scaledWidthsRef.current;

      // Check for out-of-bounds images
      // Check for out-of-bounds images
      return newPositions.map((pos, i) => {
        const imageWidth = currentWidths[i] || 0;
        return checkBounds(pos, leftBoundary, rightBoundary, albumWidth.current);
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
              className="select-none"
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

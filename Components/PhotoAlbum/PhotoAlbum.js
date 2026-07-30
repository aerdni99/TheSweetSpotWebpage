/*
    PhotoAlbum.js

    Component for photo album on the website
*/

"use client";

import { useState, useEffect } from "react";
import ShowSelector from "./ShowSelector.js";
import Photos from "./Photos.js";

export default function PhotoAlbum() {
  const [venues, setVenues] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch the initial list of venues on mount
  useEffect(() => {
    async function loadInitialData() {
      try {
        const venueResponse = await fetch("/api/venues");
        const venueList = await venueResponse.json();
        setVenues(venueList);

        // If there are venues, auto-load the first venue's photos
        if (venueList.length > 0) {
          await handleVenueChange(venueList[0]);
        }
      } catch (err) {
        console.error("Error initializing photo album:", err);
      } finally {
        setLoading(false);
      }
    }

    loadInitialData();
  }, []);

  // 2. Callback passed to ShowSelector to trigger updates on user selection
  const handleVenueChange = async (venueName) => {
    if (!venueName) return;
    setLoading(true);
    
    try {
      // Hit our secure API bridge instead of Supabase directly
      const response = await fetch(`/api/photos?venue=${encodeURIComponent(venueName)}`);
      const photosData = await response.json();
      
      setImgs(Array.isArray(photosData) ? photosData : []);
    } catch (err) {
      console.error("Error updating photos for venue:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <ShowSelector 
        venues={venues} 
        onVenueChange={handleVenueChange} 
      />
      
      {loading ? (
        <div className="text-center py-12 text-zinc-400">Loading gallery...</div>
      ) : (
        <Photos imgs={imgs} />
      )}
    </div>
  );
}
 
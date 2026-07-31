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
  const [selectedVenue, setSelectedVenue] = useState("");
  const [loading, setLoading] = useState(true);

  // 1. Fetch the initial list of venues on mount
  useEffect(() => {
    async function loadInitialData() {
      try {
        const venueResponse = await fetch("/api/venues");
        if (!venueResponse.ok) throw new Error("Failed to fetch venues");

        const venueList = await venueResponse.json();
        setVenues(venueList);

        // If there are venues, auto-load the first venue's photos
        if (Array.isArray(venueList) && venueList.length > 0) {
          setSelectedVenue(venueList[0].id);
        } else {
          // No venues found
          setLoading(false);
        }
      } catch (err) {
        console.error("Error initializing photo album:", err);
        setLoading(false);
      }
    }

    loadInitialData();
  }, []);

  // Re-fetch photos when the selected venue changes
  useEffect(() => {
    if (!selectedVenue) return;

    async function loadPhotos() {
      setLoading(true);
      try {
        const response = await fetch(`/api/photos?showId=${selectedVenue}`);
        if (!res.ok) throw new Error("Failed to fetch photos");

        const photosData = await res.json();
        setImgs(Array.isArray(photosData) ? photosData : []);
      } catch (err) {
        console.error("error updating photos:", err);
        setImgs([]);
      } finally {
        setLoading(false);
      }
    }
    
    loadPhotos();
  }, [selectedVenue]);

  return (
    <div className="space-y-6">
      <ShowSelector 
        shows={venues} 
        selectedShowId={selectedVenue}
        onShowChange={(showId) => setSelectedVenue(showId)} 
      />
      
      {loading ? (
        <div className="text-center py-12 text-zinc-400">Loading gallery...</div>
      ) : (
        <Photos imgs={imgs} />
      )}
    </div>
  );
}
 
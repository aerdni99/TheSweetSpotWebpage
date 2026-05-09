/*
    PhotoAlbum.js

    Component for photo album on the website
*/

import ShowSelector from "./ShowSelector.js";
import Photos from "./Photos.js"
import { supabase } from "../../lib/supabase";

export async function getAlbumImages() {
  const {data, error } = await supabase
    .from("Photos")
    .select("*");

    if (error) {
      console.error("Supabase DB error:", error);
      return [];
    }

    return data;
}

// @TODO This query needs to return only unique values
export async function getVenues() {
  const {data, error } = await supabase
    .from("Photos")
    .select(" Venue");

    if (error) {
      console.error("Supabase DB error:", error);
      return [];
    }

    const uniqueVenueNames = [...new Set(data.map(item => item.Venue))];

    return uniqueVenueNames;
}

export default async function PhotoAlbum() {

  // Retrieve images from database and shuffle them
  const imgs = await getAlbumImages();
  const shuffledImgs = [...imgs].sort(() => Math.random() - 0.5);
  const venues = await getVenues();

  return (
    <div className='space-y-6'>
      <ShowSelector venues={ venues } />
      <Photos imgs={ shuffledImgs || [] } />
    </div>
  );
}

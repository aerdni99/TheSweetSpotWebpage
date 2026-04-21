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

export default async function PhotoAlbum() {

  // Retrieve images from database and shuffle them
  const imgs = await getAlbumImages();
  const shuffledImgs = [...imgs].sort(() => Math.random() - 0.5);

  return (
    <div>
      <ShowSelector />
      <Photos imgs={shuffledImgs || []} />
    </div>
  );
}

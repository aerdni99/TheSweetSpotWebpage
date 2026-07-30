/*
    photos/route.js

    API route for fetching photos from the database (Filtered for the selected venue)
*/

import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const venueName = searchParams.get("venue");

  if (!venueName) {
    return NextResponse.json({ error: "Venue parameter is required" }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from("Photos")
      .select("*")
      .eq("Venue", venueName);

    if (error) throw error;

    // Shuffle the array on the server before sending it down to save client CPU cycles
    const shuffledImgs = [...data].sort(() => Math.random() - 0.5);

    return NextResponse.json(shuffledImgs);
  } catch (error) {
    console.error("API Error fetching photos:", error);
    return NextResponse.json({ error: "Failed to fetch photos" }, { status: 500 });
  }
}

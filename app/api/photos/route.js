/*
    photos/route.js

    API route for fetching photos from the database (Filtered for the selected venue)
*/

import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const showId = searchParams.get("showId");

    if (!showId) {
      return NextResponse.json({ error: "Venue parameter is required" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("Photos")
      .select("*")
      .eq("show_id", showId);

    if (error) {
      console.error("Supabase Error fetching photos:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error("API Error fetching photos:", error);
    return NextResponse.json({ error: "Failed to fetch photos" }, { status: 500 });
  }
}

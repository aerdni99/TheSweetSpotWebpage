/*
    venues/route.js

    API Route for getting the list of unique venues in my database
*/

import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("Photos")
      .select("Venue");

    if (error) throw error;

    // Filter out duplicates cleanly on the server
    const uniqueVenueNames = [...new Set(data.map(item => item.Venue).filter(Boolean))];

    return NextResponse.json(uniqueVenueNames);
  } catch (error) {
    console.error("API Error fetching venues:", error);
    return NextResponse.json({ error: "Failed to fetch venues" }, { status: 500 });
  }
}
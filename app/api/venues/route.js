/*
    venues/route.js

    API Route for getting the list of unique venues in my database
*/

import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("Shows")
      .select("id, Venue, Date")
      .order("Date", { ascending: false });

    if (error) {
      console.error("Supabase Error fetching venues:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(uniqueVenueNames);
  } catch (error) {
    console.error("API Error fetching venues:", error);
    return NextResponse.json({ error: error.message ||"Failed to fetch venues" }, { status: 500 });
  }
}
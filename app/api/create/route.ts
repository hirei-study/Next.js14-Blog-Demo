import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id, title, content } = await req.json();
    const { data, error } = await supabase
      .from("posts")
      .insert({ id, title, content, createdAt: new Date().toISOString() });

    return NextResponse.json(data, {
      status: 201,
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json(error);
  }
}

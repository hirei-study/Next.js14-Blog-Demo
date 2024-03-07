import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

// 特定のページ取得のAPI
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // console.log(params);
    // paramsからidを取得する方法
    const id = params.id;

    // req.urlからidを取得する方法
    const URLId = req.url.split("/api/")[1];
    // console.log(req.url);
    // console.log(URLId);

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    return NextResponse.json(data);
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json(error);
  }
}

// 削除用のAPI
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // console.log(params);

    // paramsからidを取得する方法
    const id = params.id;

    // req.urlからidを取得する方法
    const URLId = req.url.split("/api/")[1];
    // console.log(req.url);
    // console.log(URLId);

    const { data, error } = await supabase.from("posts").delete().eq("id", id);

    if (error) {
      return NextResponse.json(error, {
        status: 500,
      });
    }

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json(error);
  }
}

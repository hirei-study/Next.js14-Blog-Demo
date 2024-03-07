import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, error } = await supabase.from("posts").select("*");

    if (error) {
      return NextResponse.json(
        {
          message: "エラーです! : ArticleCard" + error,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    console.error("error: ", error);
  }
}

import Image from "next/image";
import ArticleList from "./features/ArticleList";
import Link from "next/link";
import { getAllArticles } from "@/blogAPI";
import { supabase } from "@/utils/supabaseClient";

export default async function Home() {
  // const articles = await getAllArticles();
  // console.log(articles);
  // console.log(supabase);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api`, { cache: "no-store" });
  const articles = await res.json();

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList articles={articles} />
      </section>

      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
          <h3 className="font-bold text-gray-900 mb-2">About me</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            pariatur suscipit. Ipsum at sed recusandae quasi obcaecati minus
            qui? Sed ex illum ad tenetur perspiciatis amet, nesciunt dolore
            necessitatibus temporibus.
          </p>
        </div>
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
          <h3 className="font-bold text-gray-900 mb-2">Category</h3>
          <ul className="text-gray-600 mt-2">
            <li>
              <Link href={"#"}>Technology</Link>
            </li>
            <li>
              <Link href={"#"}>Auto</Link>
            </li>
            <li>
              <Link href={"#"}>Finance</Link>
            </li>
            <li>
              <Link href={"#"}>Sports</Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

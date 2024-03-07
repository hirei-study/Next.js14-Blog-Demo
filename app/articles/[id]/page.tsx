import DeleteButton from "@/app/components/DeleteButton";
import { getDetailArticles } from "@/blogAPI";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  // const detailArticle = await getDetailArticles(params.id);
  // console.log(detailArticle);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/${params.id}`, {
    next: { revalidate: 60 },
  });

  // console.log("res: ", res);
  // console.log("params.id/////////// : ", params.id);
  const detailArticle = await res.json();

  return (
    <div className="max-3xl mx-auto p-5">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
        priority={true}
        alt="Image"
        width={1280}
        height={300}
      />
      <h1 className="text-5xl text-center my-10">{detailArticle.title}</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-sm leading-relaxed text-end">
        <p>{new Date(detailArticle.createdAt).toLocaleString()}</p>
      </div>
      <div className="text-end mt-4">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;

import { Article } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = (props: ArticleCardProps) => {
  const { article } = props;
  return (
    <article
      className="shadow my-4 flex flex-col justify-center items-center"
      key={article.id}
    >
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          priority={true}
          alt="Image"
          width={1280}
          height={300}
        />
      </Link>

      <div className="bg-white flex flex-col justify-start p-6 w-full">
        <Link
          href={`articles/${article.id}`}
          className="text-blue-700 pb-4 font-bold"
        >
          Technology
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-slate-900 text-3xl font-bold hover:text-gray-600 pb-4"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-3 text-slate-900">
          By hirei, Published on {new Date(article.createdAt).toLocaleString()}
        </p>
        <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
          {article.content.length > 70
            ? article.content.substring(0, 71) + "..."
            : article.content}
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-blue-500 hover:text-blue-800"
        >
          続きを読む
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;

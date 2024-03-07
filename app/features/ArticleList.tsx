import { Article } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = (props: ArticleListProps) => {
  const { articles } = props;
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;

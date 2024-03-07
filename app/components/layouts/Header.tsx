import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-extrabold">
          <Link href={"/"}>Next.js 14 Blog</Link>
        </h1>
      </div>

      <div className="text-sm font-medium">
        <nav>
          <Link
            href={"/articles/new"}
            className="bg-orange-300 py-2 px-4 rounded-md"
          >
            記事を書く
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

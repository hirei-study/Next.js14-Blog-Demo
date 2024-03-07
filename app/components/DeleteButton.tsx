"use client";

import { deleteArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type DeleteButtonProp = {
  id: string;
};

const DeleteButton = (props: DeleteButtonProp) => {
  const { id } = props;
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    setLoading(true);

    // await deleteArticle(id);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/api/${id}`, {
      method: "DELETE",
    });

    setLoading(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-4 inline cursor-pointer mx-auto"
    >
      削除
    </div>
  );
};

export default DeleteButton;

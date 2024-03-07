"use client";

import React from "react";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="bg-red-100 border-l-4 border-r-4 border-red-500 text-red-700 my-4 w-full rounded shadow-md mx-auto flex flex-col justify-center items-center">
      <h3 className="font-bold text-4xl mb-4 p-4">エラーが発生しました!</h3>
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200 mb-4"
      >
        リロード
      </button>
    </div>
  );
};

export default Error;

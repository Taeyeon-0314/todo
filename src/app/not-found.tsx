import Link from "next/link";
import React from "react";

const notFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">잘못된 페이지로 접근했어용~!!</h1>
      <div className="flex gap-4 mt-4 bg-gray-500 p-3 rounded-md">
        <Link className="text-yellow-500 font-bold" href="/">
          Todo 리스트로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default notFoundPage;

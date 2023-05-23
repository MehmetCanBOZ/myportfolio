import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex flex-row flex-nowrap overflow-scroll justify-center space-x-8 pb-2 px-4 text-lg my-3">
      <span className="text-gray-500 hover:text-blue-500 hover:underline">
        <Link href="/">Home</Link>
      </span>
      <span className="text-gray-500 hover:text-blue-500 hover:underline">
        <Link href="/blogs">Blogs</Link>
      </span>
    </div>
  );
};

export default Menu;

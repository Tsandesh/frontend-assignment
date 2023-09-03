"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const [searchKey, setSearchKey] = React.useState("");
  return (
    <div className="navbar bg-[#f85606] px-8 absolute top-0">
      <div className="flex-1">
        <button
          onClick={() => router.push("/")}
          className="btn btn-ghost normal-case text-white text-3xl"
        >
          Online Store
        </button>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={(e) => router.push(`/search?q=${e.target.value}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

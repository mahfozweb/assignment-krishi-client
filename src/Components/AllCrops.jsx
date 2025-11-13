import React, { useEffect, useState } from "react";
import Crops from "./Crops";

const AllCrops = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch("https://assignment-krishi-server.vercel.app/crops")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
      });
  }, []);

  const handleSearchBar = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    fetch(
      `https://assignment-krishi-server.vercel.app/search?search=${search_text}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
      });
  };

  //   const query = req.query.search
  // if (query) {
  //     // filter with query
  // } else {
  //     // full data
  // }
  return (
    <div className=" bg-gradient-to-r from-emerald-200 via-lime-200 to-yellow-100">
      <h1 className="font-bold text-4xl p-10">
        Availabe Crops total: {crops.length}
      </h1>
      <form onSubmit={handleSearchBar} className="p-5 rounded-full ">
        <label className="input">
          <svg
            className="h-[1em] opacity-50 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            className="bg-gray-100"
            name="search"
            type="search"
            placeholder="Search"
          />
        </label>
        <button className="btn btn-secondary ml-5">search</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-10">
        {crops.map((crop) => (
          <Crops crop={crop}></Crops>
        ))}
      </div>
    </div>
  );
};

export default AllCrops;

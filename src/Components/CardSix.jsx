import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router";

const CardSix = () => {
  const [crops, setCrops] = useState([]);
  // console.log(crops);
  useEffect(() => {
    fetch("https://assignment-krishi-server.vercel.app/latest-crops")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
      });
  }, []);
  return (
    <div className=" bg-gradient-to-r from-emerald-200 via-lime-200 to-yellow-100">
      <h1 className="font-bold text-4xl p-10">Latest Crops</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  gap-7 px-3 pb-3">
        {crops.map((crop) => (
          <Cards key={crop._id} crop={crop}></Cards>
        ))}
      </div>
      <div className="py-10 ">
        <Link
          to="/all-crops"
          className="block w-[200px] text-xl mx-auto px-2 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-green-600 to-green-800 hover:opacity-90 text-center"
        >
          See All Crops
        </Link>
      </div>
    </div>
  );
};

export default CardSix;

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
  return (
    <div className=" bg-gradient-to-r from-emerald-200 via-lime-200 to-yellow-100">
      <h1 className="font-bold text-4xl p-10">
        Availabe Crops total: {crops.length}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-10">
        {crops.map((crop) => (
          <Crops crop={crop}></Crops>
        ))}
      </div>
    </div>
  );
};

export default AllCrops;

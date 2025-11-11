import React, { useEffect, useState } from "react";
import Crops from "./Crops";

const AllCrops = () => {
  const [crops, setCrops] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/crops")
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
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  gap-7 px-3 pb-3">
        {crops.map((crop) => (
          <Crops crop={crop}></Crops>
        ))}
      </div>
    </div>
  );
};

export default AllCrops;

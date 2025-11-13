import React, { useEffect, useState } from "react";
import FeatureMap from "./FeatureMap";

const Feature = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-krishi-server.vercel.app/feature`)
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div className=" py-9 px-4 bg-gradient-to-r from-green-100 via-lime-50 to-emerald-100 ">
      <h1 className="text-3xl font-bold text-center text-green-650 mb-5">
        {" "}
        🌾Featured Crops
      </h1>
      <div className="grid grid-cold-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureMap feature={feature}></FeatureMap>
        ))}
      </div>
    </div>
  );
};

export default Feature;

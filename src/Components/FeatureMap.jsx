import React from "react";

const FeatureMap = ({ feature }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-100">
      <figure className="h-48">
        <img
          src={feature.image}
          alt={feature.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-4 ">
        <h1 className="text-xl font-semibold text-green-800">{feature.name}</h1>
        <p className="text-gray-650 font-semibold mt-1">
          {feature.price} ৳ / kg
        </p>
        <button className="btn btn-success mt-2">Buy Now</button>
      </div>
    </div>
  );
};

export default FeatureMap;

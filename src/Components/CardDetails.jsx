import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CardDetails = () => {
  const [crops, setCrops] = useState({});
  const {
    name,
    image,
    type,
    pricePerUnit,
    unit,
    quantity,
    description,
    location,
  } = crops;
  console.log(name, image);
  const data = useParams();
  //   console.log(data.id);
  useEffect(() => {
    fetch(`http://localhost:4000/crops/${data.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
      });
  }, [data.id]);

  return (
    <div>
      <h1>details page</h1>
      <div>
        <div className="max-w-xl mx-auto mt-10 p-5 shadow-md rounded-lg bg-white">
          {/* Image Section */}
          <div className="w-full h-64 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="mt-5">
            <h1 className="text-3xl font-semibold text-gray-800">{name}</h1>

            <p className="text-gray-600 mt-2">
              <span className="font-medium">Type:</span> {type}
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Price:</span> {pricePerUnit} /{" "}
              {unit}
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Quantity:</span> {quantity}
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Location:</span> {location}
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

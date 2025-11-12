import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router";

const Cards = ({ crop }) => {
  const { image, name, description, pricePerUnit, type } = crop;
  //   console.log(data);

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="card-body flex flex-col justify-between flex-1">
        <h2 className="card-title flex justify-between items-center w-full">
          <span>{name}</span>
          <div className="flex items-center gap-2">
            <div className="badge badge-secondary">{type}</div>
            <div className="badge badge-secondary flex items-center gap-1">
              <FaBangladeshiTakaSign /> {pricePerUnit}
            </div>
          </div>
        </h2>
        <div className="mt-5">
          <Link
            to={`/crops/${crop._id}`}
            type="submit"
            className="w-[150px] px-5 py-2   rounded-lg text-white font-semibold bg-gradient-to-r from-green-600 to-green-800 hover:opacity-90"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;

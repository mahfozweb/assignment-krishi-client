import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Cards = ({ crop }) => {
  const { image, name, description, pricePerUnit, type } = crop;
  //   console.log(data);

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{type}</div>
        </h2>
        <p>{description}</p>

        <div className="card-actions justify-center">
          <div className="badge badge-secondary">
            <span>
              <FaBangladeshiTakaSign />
            </span>{" "}
            {pricePerUnit}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-[150px] py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-green-600 to-green-800 hover:opacity-90"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

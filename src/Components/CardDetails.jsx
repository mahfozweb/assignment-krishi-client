import React, { use, useEffect, useState } from "react";
import { IoMdHappy } from "react-icons/io";
import { Link, NavLink, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import Receive from "./Receive";

const CardDetails = () => {
  const [error, setError] = useState("");
  const [interest, setInterest] = useState([]);
  const { user } = use(AuthContext);
  const [crops, setCrops] = useState({});
  console.log(crops?.owner?.ownerEmail);

  const owner = crops?.owner?.ownerEmail;
  const cropName = crops?.name;
  console.log(cropName);
  const {
    _id,
    name,
    image,
    type,
    pricePerUnit,
    unit,
    quantity,
    description,
    location,
  } = crops;
  // console.log(name, image);
  const data = useParams();
  //   console.log(data.id);
  useEffect(() => {
    fetch(`https://assignment-krishi-server.vercel.app/crops/${data.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
      });
  }, [data.id]);

  // interest
  useEffect(() => {
    fetch(`https://assignment-krishi-server.vercel.app/interest/${crops._id}`)
      .then((res) => res.json())
      .then((data) => {
        setInterest(data);
        // console.log(data);
      });
  }, [crops._id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const status = e.target.status.value;
    const quantity = Number(e.target.quantity.value);
    if (quantity < 1) {
      setError("Quantity must be at least 1");
      return;
    }
    const newInterest = {
      cropId: _id,
      crop: cropName,
      ownerEmail: owner,
      name,
      email,
      message,
      status,
      quantity,
    };
    fetch("https://assignment-krishi-server.vercel.app/interest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInterest),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after post", data);
        if (data.insertedId) {
          toast.success(" Interest Crop submitted successfully!");
        }
      });
    e.target.reset();
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Crops Details </h1>
      <div>
        <div className="max-w-xl mx-auto mt-10 p-5 shadow-md rounded-lg bg-gradient-to-r from-green-300 to-white">
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
      {/* form///////////////////// */}
      <div>
        {user?.email !== crops?.owner?.ownerEmail ? (
          <div className="card bg-gradient-to-r from-green-200 via-green-100 to-yellow-100 mx-auto mt-5 w-full max-w-2xl shadow-4xl p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold flex justify-center items-center gap-2">
                Interest! <IoMdHappy />
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label className="label mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  name="email"
                  className="input w-full"
                  placeholder="provide your email"
                />
              </div>

              <div className="flex flex-col">
                <label className="label mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Name"
                />
              </div>

              <div className="flex flex-col">
                <label className="label mb-1">Message</label>
                <input
                  type="text"
                  name="message"
                  className="input w-full"
                  placeholder="Message"
                />
              </div>

              <div className="flex flex-col">
                <label className="label mb-1">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  className="input w-full"
                  placeholder="Quantity"
                />
              </div>
              <div className="flex flex-col">
                <label className="label mb-1">Total Price</label>
                <input
                  type="text"
                  name="price"
                  className="input w-full"
                  placeholder="total price"
                />
              </div>

              <div className="flex flex-col">
                <label className="label mb-1">Status</label>
                <input
                  type="text"
                  name="status"
                  className="input w-full"
                  defaultValue="pending"
                />
              </div>

              <button className="btn btn-neutral w-full mt-4">Submit</button>

              {error && <p className="text-red-400 mt-2">{error}</p>}
            </form>
          </div>
        ) : (
          <>
            {interest.length > 0 ? (
              interest.map((interest) => (
                <Receive interest={interest}></Receive>
              ))
            ) : (
              <h1 className="text-2xl text-red-400 font-semibold p-10">
                Not have any crop interest List
              </h1>
            )}
          </>
        )}
      </div>
      {/* recrive section */}
    </div>
  );
};

export default CardDetails;

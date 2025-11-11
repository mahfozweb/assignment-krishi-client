import React, { use, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import MyPostDetails from "../Components/MyPostDetails";

const MyPost = () => {
  const { user } = use(AuthContext);
  const [crops, setCrops] = useState([]);
  const editModalRef = useRef(null);
  console.log(crops);

  useEffect(() => {
    fetch(`http://localhost:4000/mypost?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
      });
  }, [user.email]);

  return (
    <div>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-5 text-center md:text-left">
          My Posted Crops
        </h1>

        {/*  Responsive Scroll for Small Screens */}
        <div className="overflow-x-auto">
          <table className="table w-full border text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th>name</th>
                <th>pricePerUnit</th>
                <th>type</th>
                <th>location</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {crops.map((crop) => (
              <MyPostDetails
                editModalRef={editModalRef}
                crop={crop}
              ></MyPostDetails>
            ))}
          </table>
        </div>
        {/* modal */}
      </div>
    </div>
  );
};

export default MyPost;

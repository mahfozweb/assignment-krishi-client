import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyInterest = () => {
  const { user } = use(AuthContext);
  const [myInterest, setMyInterest] = useState();
  console.log(myInterest);

  useEffect(() => {
    fetch(
      `https://assignment-krishi-server.vercel.app/myInterest/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyInterest(data);
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
                <th>message</th>
                <th>quantity</th>

                <th>status</th>
              </tr>
            </thead>
            {myInterest?.map((interest) => (
              <tbody>
                <tr>
                  <td>{interest.name}</td>
                  <td>{interest.message}</td>
                  <td>{interest.quantity}</td>
                  <td>{interest.status}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        {/* modal */}
      </div>
    </div>
  );
};

export default MyInterest;

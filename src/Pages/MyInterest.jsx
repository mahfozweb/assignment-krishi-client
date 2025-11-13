import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyInterest = () => {
  const { user } = use(AuthContext);
  const [myInterest, setMyInterest] = useState();
  const [sortOrder, setSortOrder] = useState("asc");
  console.log(myInterest);

  useEffect(() => {
    fetch(
      `https://assignment-krishi-server.vercel.app/myInterest/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        const sortedData =
          sortOrder === "asc"
            ? data.sort((a, b) => a.quantity - b.quantity)
            : data.sort((a, b) => b.quantity - a.quantity);
        setMyInterest(sortedData);
      });
  }, [user.email, sortOrder]);
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  return (
    <div>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-5 text-center md:text-left">
          My Interest
        </h1>
        <div className="mb-4">
          <label className="mr-2 font-semibold">Sort by Quantity:</label>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border rounded px-2 py-1"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full border text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200 ">
                <th>crop Name</th>
                <th>crop owner</th>
                <th>message</th>
                <th>quantity</th>

                <th>status</th>
              </tr>
            </thead>
            {myInterest?.map((interest, index) => (
              <tbody>
                <tr key={index}>
                  <td>{interest.crop}</td>
                  <td>{interest.ownerEmail}</td>
                  <td>{interest.message}</td>
                  <td>{interest.quantity}</td>
                  <td>{interest.status}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyInterest;

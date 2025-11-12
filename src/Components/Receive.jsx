import React, { useState } from "react";
import { toast } from "react-toastify";

const Receive = ({ interest }) => {
  const [status, setStatus] = useState(interest.status || "Pending");

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);

    try {
      const res = await fetch(
        `http://localhost:4000/interest/${interest._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (res.ok) {
        toast.success(`Status updated to ${newStatus}`);
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      toast.error("Error updating status");
      console.error(error);
    }
  };

  return (
    <div className="card m-5 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Buyer Name: {interest.name}</h2>
        <h2 className="card-title">Quantity: {interest.quantity}</h2>
        <h2 className="card-title">Buyer Email: {interest.email}</h2>

        <div className="justify-start card-actions">
          <button className="btn btn-primary">{interest.message}</button>
        </div>

        <div className="mt-3">
          <label className="font-semibold">Status:</label>
          <select
            value={status}
            onChange={handleStatusChange}
            className="w-full p-2 border rounded"
          >
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Receive;

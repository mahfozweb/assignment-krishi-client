import React, { useState } from "react";
import { toast } from "react-toastify";

const Receive = ({ interest }) => {
  const [status, setStatus] = useState(interest.status || "Pending");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleStatusUpdate = async (newStatus) => {
    try {
      const res = await fetch(
        `https://assignment-krishi-server.vercel.app/interest/${interest._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (res.ok) {
        setStatus(newStatus);
        setIsDisabled(true);
        toast.success(`Status updated to ${newStatus}`);
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      toast.error("Error updating status");
      console.error(error);
    }
  };

  if (!interest) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        No interests yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto m-5">
      <table className="table w-full border rounded-lg">
        <thead className="bg-green-600 text-white">
          <tr>
            <th>Buyer Name</th>
            <th>Buyer Email</th>
            <th>Quantity</th>
            <th>Message</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr className="hover">
            <td>{interest.name}</td>
            <td>{interest.email}</td>
            <td>{interest.quantity}</td>
            <td>{interest.message}</td>

            <td>
              <span
                className={`badge ${
                  status === "Accepted"
                    ? "badge-success"
                    : status === "Rejected"
                    ? "badge-error"
                    : "badge-warning"
                }`}
              >
                {status}
              </span>
            </td>

            <td className="flex flex-wrap gap-2">
              <button
                className="btn btn-sm btn-success"
                disabled={isDisabled || status === "Accepted"}
                onClick={() => handleStatusUpdate("Accepted")}
              >
                Accept
              </button>

              <button
                className="btn btn-sm btn-error"
                disabled={isDisabled || status === "Rejected"}
                onClick={() => handleStatusUpdate("Rejected")}
              >
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Receive;

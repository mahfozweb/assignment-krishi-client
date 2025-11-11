import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MyPostDetails = ({ crop }) => {
  console.log(crop);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <tbody>
        <tr>
          <td>{crop.name}</td>
          <td>{crop.pricePerUnit}</td>
          <td>{crop.type}</td>
          <td>{crop.location}</td>

          <td>
            <button
              onClick={openModal}
              className="btn btn-xs md:btn-sm btn-primary"
            >
              Edit
            </button>
          </td>

          <td>
            <button
              // onClick={() => handleDelete(crop._id)}
              className="btn btn-xs md:btn-sm btn-error"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <div className="p-4">
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Open Modal
        </button> */}

        {isModalOpen && (
          <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96 relative">
              <h2 className="text-xl font-bold mb-4">{crop.name}</h2>
              <p>This is a simple modal content.</p>

              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✖
              </button>

              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyPostDetails;

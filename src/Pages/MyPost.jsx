import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import MyPostDetails from "../Components/MyPostDetails";
import { toast } from "react-toastify";

const MyPost = () => {
  const { user } = use(AuthContext);
  const [crops, setCrops] = useState([]);
  const [selected, setSelected] = useState({});
  console.log(selected);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const pricePerUnit = form.pricePerUnit.value;
    const unit = form.unit.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const location = form.location.value;
    const image = e.target.image.value;

    const updateData = {
      name,
      image,
      pricePerUnit,
      unit,
      quantity,
      description,
      location,
    };

    fetch(
      `https://assignment-krishi-server.vercel.app/update/${selected._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Update Success:", data);
        toast.success("success");

        setIsModalOpen(false);

        setCrops((prev) =>
          prev.map((crop) =>
            crop._id === selected._id ? { ...crop, ...updateData } : crop
          )
        );
      })
      .catch((err) => console.error("❌ Update failed:", err));
  };

  useEffect(() => {
    fetch(
      `https://assignment-krishi-server.vercel.app/mypost?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
      });
  }, [user.email]);
  //   modal
  //   useEffect(() => {

  //   }, [selectedId]);

  const openModal = (id) => {
    setIsModalOpen(true);
    setSelected(id);
  };
  const closeModal = () => setIsModalOpen(false);
  // delete crops
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this crop?"
    );
    if (!confirmDelete) return;

    fetch(`https://assignment-krishi-server.vercel.app/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Crop deleted successfully!");

          setCrops((prevCrops) => prevCrops.filter((crop) => crop._id !== id));
        } else {
          toast.error("Failed to delete crop!");
        }
      })
      .catch((err) => {
        console.error("❌ Delete failed:", err);
        toast.error("Error deleting crop!");
      });
  };

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
              <tbody>
                <tr>
                  <td>{crop.name}</td>
                  <td>{crop.pricePerUnit}</td>
                  <td>{crop.type}</td>
                  <td>{crop.location}</td>

                  <td>
                    <NavLink
                    //  to={`/update:${crop._id}`}
                    >
                      <button
                        onClick={() => openModal(crop)}
                        className="btn btn-xs md:btn-sm btn-primary"
                      >
                        Edit
                      </button>
                    </NavLink>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(crop._id)}
                      className="btn btn-xs md:btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        {/* modal */}
      </div>
      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          {/* Modal Box */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl relative w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-green-700">
                Update Crop
              </h1>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Edit your crop information below
              </p>
            </div>

            {/* ✅ Responsive Form */}
            <form
              onSubmit={handleLogin}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              {/* Crop Name */}
              <div>
                <label className="block font-semibold mb-1 text-sm md:text-base">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selected.name}
                  className="input input-bordered w-full"
                  placeholder="Name"
                />
              </div>

              {/* Price per Unit */}
              <div>
                <label className="block font-semibold mb-1 text-sm md:text-base">
                  Price per Unit
                </label>
                <input
                  type="text"
                  name="pricePerUnit"
                  defaultValue={selected.pricePerUnit}
                  className="input input-bordered w-full"
                  placeholder="Price"
                />
              </div>

              {/* Unit */}
              <div>
                <label className="block font-semibold mb-1 text-sm md:text-base">
                  Unit
                </label>
                <input
                  type="text"
                  name="unit"
                  defaultValue={selected.unit}
                  className="input input-bordered w-full"
                  placeholder="Unit (e.g., kg)"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block font-semibold mb-1 text-sm md:text-base">
                  Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={selected.quantity}
                  className="input input-bordered w-full"
                  placeholder="Quantity"
                />
              </div>

              {/* Image URL */}
              <div className="sm:col-span-2">
                <label className="block font-semibold mb-1 text-sm md:text-base">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={selected.image}
                  className="input input-bordered w-full"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label className="block font-semibold mb-1 text-sm md:text-base">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={selected.description}
                  className="textarea textarea-bordered w-full min-h-[100px]"
                  placeholder="Write details about the crop..."
                ></textarea>
              </div>

              {/* Location */}
              <div className="sm:col-span-2">
                <label className="block font-semibold mb-1 text-sm md:text-base">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={selected.location}
                  className="input input-bordered w-full"
                  placeholder="Location"
                />
              </div>

              {/* Buttons */}
              <div className="sm:col-span-2 flex flex-col sm:flex-row justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-outline w-full sm:w-auto"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-success w-full sm:w-auto"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPost;

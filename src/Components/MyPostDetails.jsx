import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MyPostDetails = ({ crop, editModalRef }) => {
  console.log(crop);
  const [editCrop, setEditCrop] = useState({});
  console.log(editCrop);

  useEffect(() => {
    fetch(`http://localhost:4000/edit-crop/${crop._id}`)
      .then((res) => res.json())
      .then((data) => {
        setEditCrop(data);
      });
  }, [crop._id]);
  const handleEdit = () => {
    editModalRef.current.showModal();
  };

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
              onClick={handleEdit}
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
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog ref={editModalRef} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default MyPostDetails;

import React from "react";

const Receive = ({ interest }) => {
  return (
    <div>
      <div>
        <div className="card m-5 bg-base-100 card-md shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Buyer Name :{interest.name}</h2>
            <h2 className="card-title">Quantity :{interest.quantity}</h2>
            <h2 className="card-title">Buyer Email :{interest.email}</h2>
            <div className="justify-start card-actions">
              <button className="btn btn-primary">{interest.message}</button>
            </div>

            {/* <h2 className="card-title">{interest.status}</h2> */}
            <div>
              <select name="type" className="w-full p-2 border rounded">
                <option value="">Select Type</option>
                <option>Accepted</option>
                <option>Pending</option>
                <option>Rejected</option>
              </select>
            </div>
            <div>
              <select name="type" className="w-full p-2 border rounded">
                <option value="">Select Type</option>
                <option>Accept</option>
                <option>Reject</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receive;

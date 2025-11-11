import React from "react";

const Receive = ({ interest }) => {
  const data = [{ ...interest }];
  //   console.log(data);
  return (
    <div>
      {data.length > 0 ? (
        <div>
          <div className="card w-96 bg-base-100 card-md shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{interest.name}</h2>
              <h2 className="card-title">{interest.quantity}</h2>
              <h2 className="card-title">{interest.status}</h2>
              <p>{interest.email}</p>
              <div>
                <select name="type" className="w-full p-2 border rounded">
                  <option value="">Select Type</option>
                  <option>Accept</option>
                  <option>Reject</option>
                </select>
              </div>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">{interest.message}</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>not have interest</h1>
      )}
    </div>
  );
};

export default Receive;

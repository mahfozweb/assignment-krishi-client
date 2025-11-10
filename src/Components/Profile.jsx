import React, { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { updateData, user, setUser } = use(AuthContext);
  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photoURL.value;
    updateData({ displayName: name, photoURL: photo })
      .then(() => {
        // alert("successfully update");

        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("successfully update");
        event.target.reset();
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <>
      <div className="bg-blue-200">
        <div className="">
          <div className="flex  items-center justify-center">
            <h1 className="text-3xl text-blue-800 font-bold">My Profile</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1>
              <span className="text-xl font-bold">Name :</span>{" "}
              <span className="white font-semibold">
                {user && user.displayName}
              </span>
            </h1>
            <h1>
              {" "}
              <span className="text-xl font-bold">Email :</span>{" "}
              <span className="white font-semibold">{user && user.email}</span>
            </h1>
            <div className=" flex justify-center items-center">
              <img
                className="w-[100px] h-[100px] rounded-[100px]"
                src={user?.photoURL}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hero bg-blue-200 min-h-screen md:-mt-[80px] ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
              <div className="card-body ">
                <h1 className="text-2xl font-bold">Update Profile</h1>
                <form onSubmit={handleUpdate}>
                  <fieldset className="fieldset ">
                    <label className="label">name</label>
                    <input
                      type="text"
                      name="name"
                      className="input"
                      placeholder="name"
                    />
                    <label className="label">photoURL</label>
                    <input
                      type="text"
                      name="photoURL"
                      className="input"
                      placeholder="photoURL"
                    />

                    <button className="btn btn-neutral mt-4">Update</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/logo.avif";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-crops">All Crops</NavLink>
            </li>
            {user && (
              <li>
                <a>Add crops</a>
              </li>
            )}
          </ul>
        </div>
        <div>
          <img className="w-[60px] h-[60px] rounded-full " src={logo} alt="" />
          <h1 className="font-semibold ">KrishiLink</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
          <li className="">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-crops">All Crops</NavLink>
          </li>
          {user && (
            <li>
              <summary>
                {" "}
                <NavLink to="add-crops">Add Crops</NavLink>
              </summary>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <NavLink to="/login">
          <button className="btn">Login</button>
        </NavLink> */}

        {user ? (
          <div className="relative">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer border border-gray-300 "
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
            ) : (
              <img
                src={photo}
                alt="avatar"
                className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer border border-gray-300 "
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
            )}

            {dropdownOpen && (
              <div className="absolute z-50 right-0 mt-2 bg-white border shadow-lg rounded-md w-40 ">
                {/* <p className="p-2 text-center bg-blue-300 text-white font-bold cursor-pointer hover:bg-gray-500">
                  {user.displayName || "mahfoz"}
                </p> */}
                <hr />
                <NavLink
                  to="/profile"
                  //   onClick={signOutUser}
                  className="bg-black block w-full text-left px-4 py-2 hover:bg-green-400 font-bold text-white text-[15px] cursor-pointer"
                >
                  Profile
                </NavLink>

                <Link
                  to="/myInterest"
                  //   onClick={signOutUser}
                  className="bg-black block w-full text-left px-4 py-2 hover:bg-green-400 font-bold text-white text-[15px] cursor-pointer"
                >
                  My Interests
                </Link>
                <Link
                  to="/myPost"
                  //   onClick={signOutUser}
                  className="bg-black block w-full text-left px-4 py-2 hover:bg-green-400 font-bold text-white text-[15px] cursor-pointer"
                >
                  My Posts
                </Link>
                <button
                  onClick={signOutUser}
                  className="bg-gray-600 block w-full text-left px-4 py-2 hover:bg-green-400 font-bold text-white text-[15px] cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

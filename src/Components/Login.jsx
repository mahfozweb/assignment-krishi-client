import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { user, signInUser, signInWithGoogle, loading } = use(AuthContext);

  // console.log(user);

  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const newUser = { name: user.displayName, email: user.email };
    signInUser(email, password)
      .then((result) => {
        toast.success("Signin Successful");
        event.target.reset();

        // console.log(location);

        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handleWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state || "/");
      })
      .catch(() => {});
  };
  return (
    <>
      {loading && <span className="loading loading-dots loading-xl"></span>}
      <div className="card bg-base-100 mx-auto mt-5 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button
                  onClick={() => setShow(!show)}
                  className="absolute top-3 right-5 md:right-5 cursor-pointer"
                >
                  {show ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                </button>
              </div>
              <div>
                <NavLink to="/forget">Forgot password?</NavLink>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            {error && <p className="text-red-400">{error}</p>}
          </form>
          <button
            onClick={handleWithGoogle}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p>
            no have a account? please{" "}
            <Link
              to="/register"
              className="text-red-500 hover:text-blue-400 font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import errorImage from "../assets/App-Error.png";

const Error = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={errorImage} alt="" />
    </div>
  );
};

export default Error;

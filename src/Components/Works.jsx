import React from "react";
import tomatoImage from "../assets/tomato.avif";
import image from "../assets/work-2.avif";
import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";

const Works = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold py-20">Working Procedure</h1>
        <div className="flex flex-col  md:flex-row    justify-between  gap-10 px-10 py-10">
          <div className="w-full md:w-[50%]">
            {/* <div>
              <img className="rounded-[10px]" src={tomatoImage} alt="" />
            </div> */}
            <div className="">
              <img className="rounded-[10px] " src={image} alt="" />
            </div>
          </div>
          <div className=" w-[50%] text-start ">
            <div>
              <div>
                <h1 className="text-xl font-semibold">Create Your Profile</h1>
              </div>
              <div>
                <ul>
                  <li>✔ Farmer</li>
                  <li>✔ Trader</li>
                  <li> ✔ Consumer</li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-xl font-semibold">
                  Post or Browse Crop Listings
                </h1>
              </div>
              <div>
                <ul>
                  <li>
                    ✔ Farmers post what they are growing, harvesting, or
                    planning to sell.
                  </li>
                  <li>
                    ✔ Traders and Consumers browse these posts to see available
                    crops, quantities, and harvest periods.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-xl font-semibold">
                  Show Interest & Request Connection
                </h1>
              </div>
              <div>
                <ul>
                  <li>✔ They can send a “Connect Request” to the farmer.</li>
                  <li>
                    ✔ Farmers also can request to collaborate with other farmers
                    or buyers.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-xl font-semibold">
                  Communicate & Collaborate
                </h1>
              </div>
              <div>
                <ul>
                  <li>
                    ✔ Users can chat, call, negotiate, and plan delivery,
                    pricing, or partnership.
                  </li>
                  <li>
                    ✔ They can decide how they want to work together — offline
                    or online.
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;

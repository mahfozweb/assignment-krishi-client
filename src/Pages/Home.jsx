import React from "react";
import Hero from "../Components/Hero";
import Works from "../Components/Works";
import CardSix from "../Components/CardSix";
import Blogs from "../Components/Blogs";
import Feature from "../Components/Feature";
import Tips from "../Components/Tips";

const Home = () => {
  let marqueeRef = null;

  const handleMouseOver = () => {
    marqueeRef.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.start();
  };
  return (
    <>
      <div className="bg-gray-400 p-10">
        <div className="  flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-indigo-800">
            KrishiLink – Connecting Farmers, Traders & Consumers
          </h1>
          <div className="pt-10 overflow-hidden">
            <marquee
              behavior="scroll"
              direction="left"
              ref={(el) => (marqueeRef = el)}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              loop="true"
              className="bg-green-100 text-green-800 font-semibold py-2 animate-marquee "
            >
              🌿 Digital Transformation in Agriculture 🌸.. 🌿 Farmers Taking a
              More Active Role in the Value Chain🌸 .. 🌿Direct Connection
              Between Farmers and Market Stakeholders 🌸..
              🌿Collaboration-Centered Marketplace Model🌸 Opportunities and
              Challenges in Adopting Digital Agriculture🌸.. 🌿
            </marquee>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-300 to-green-200">
        <Hero></Hero>
      </div>
      <div>
        <CardSix></CardSix>
      </div>
      <div className="bg-gradient-to-r from-blue-100 to-green-300">
        <Works></Works>
      </div>
      <div>
        <Blogs></Blogs>
      </div>
      <div>
        <Feature></Feature>
      </div>
      <div>
        <Tips></Tips>
      </div>
    </>
  );
};

export default Home;

import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hidden md:flex bg-blue relative text-white">
        <img src="/desktop/image-header.jpg" alt="notion-image" />
        <h1 className="font-fraunces text-center text-6xl absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          WE ARE CREATIVES
        </h1>
      </div>
    </div>
  );
};

export default Hero;

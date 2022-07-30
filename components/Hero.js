const Hero = () => {
  return (
    <div>
      <div className=" hidden md:flex bg-blue relative text-white">
        <img src="/desktop/image-header.jpg" alt="orange-image" />
        <h1 className="truncate font-fraunces text-center sm:text-3xl md:text-5xl lg:text-7xl tracking-widest absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          WE ARE CREATIVES
        </h1>
        <img
          className=" hidden lg:flex h-32 absolute top-auto left-1/2 -translate-x-1/2 translate-y-80 fixed"
          src="/icon-arrow-down.svg"
        />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Content = () => {
  return (
    <div>
      {/* Section-1 */}
      <div className="items-center grid grid-cols-2 ">
        <div className="px-24 ">
          <h2 className="font-fraunces text-4xl">Transform your brand</h2>
          <p className="font-barlow text-greyish text-sm font-medium mt-5 mb-5">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a className="font-fraunces text-sm underline underline-offset-0 decoration-4 decoration-lightyellow hover:decoration-yellow cursor-pointer ">
            LEARN MORE
          </a>
        </div>
        <img src="/desktop/image-transform.jpg" alt="egg-image" />
      </div>

      {/* Section-2 */}
      <div className="items-center grid grid-cols-2">
        <img src="/desktop/image-stand-out.jpg" alt="egg-image" />
        <div className="px-24">
          <h2 className="font-fraunces text-4xl">
            Stand out to the right audience
          </h2>
          <p className="font-barlow text-greyish text-sm mt-5 mb-5 font-medium">
            Using collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a className="font-fraunces text-sm underline underline-offset-0 decoration-4 decoration-[#ffaaa5] hover:decoration-red hover:decoration-yellow cursor-pointer ">
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Section-3 */}
      <div className="items-center grid grid-cols-2">
        <div className="relative">
          <img src="/desktop/image-graphic-design.jpg" alt="cherry-image" />
          <div className="text-center absolute top-[350px] translate-x-44 font-fraunces text-green">
            <h1 className="text-2xl mb-4">Graphic Design</h1>
            <div className=" text-sm font-barlow font-medium leading-relaxed">
              <p>
                Great design makes you memorable. We deliver
                <br />
                artwork that underscores your brand message
                <br />
                and captures potential clients’ attention.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src="/desktop/image-photography.jpg" alt="orange-image" />
          <div className="text-center absolute top-[350px] translate-x-44 font-fraunces text-darkblue">
            <h1 className="text-2xl mb-4">Photography</h1>
            <div className=" text-sm font-barlow leading-relaxed font-medium">
              <p>
                Increase your credibility by getting the most
                <br />
                stunning, high-quality photos that improve your
                <br />
                business image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

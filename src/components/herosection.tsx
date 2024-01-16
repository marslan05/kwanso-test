import React from "react";


const HeroSection: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pt-10">
        <h1 className="text-gray-900 text-4xl font-bold pb-3 border-b border-gray-200">
          Top Stories
        </h1>
        <div className="rounded-lg flex align-bottom min-h-[400px] justify-end flex-col mt-4 overflow-hidden relative">
          <img
            className="w-full h-full absolute top-0 left-0"
            src="/1200-400.png"
            alt="Hero Section"
          />
          <div className="flex relative p-10 z-10 flex-col gap-5 sm:w-5/6 w-full">
            <span className="inline-flex items-center rounded-md bg-blue-600 px-2 py-1 text-sm w-max font-semibold text-white">
              Technology
            </span>
            <h1 className="text-white text-5xl leading-[65px] font-semibold capitalize">
              The impact of technology on the workplace: How technology is
              changing
            </h1>
            <div className="flex align-middle items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gray-200 block"></span>
              <span className="text-white text-sm font-semibold">
                Tracy Willsom
              </span>
              <span className="text-white text-sm font-semibold">
                August 20, 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

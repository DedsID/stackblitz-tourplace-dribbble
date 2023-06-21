import React from 'react';

const Feature = () => {
  return (
    <div className="pt-40 pb-40">
      <center>
        <h1 className="text-7xl">Our Features</h1>
        <div className="pt-20 relative">

          <div className="flex justify-between">
            <div className="pr-10">
              <div className="items-center justify-center pb-5 relative">
                <div className="rounded-full w-20 h-20 bg-trueGray-900 flex items-center justify-center">
                  <span className="text-white text-2xl">01</span>
                </div>
                <div className="w-3/4 border-t-2 border-dashed border-gray-900 absolute top-10 left-3/4"></div>
              </div>
              <div className="text-5xl py-5">Dynamic Packaging</div>
              <div className="secol text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit blanditiis tempore quam! Quis, dolor hict.
              </div>
            </div>

            <div className="px-20">
              <div className="items-center justify-center pb-5">
                <div className="rounded-full w-20 h-20 bg-trueGray-900 flex items-center justify-center">
                  <span className="text-white text-2xl">02</span>
                </div>
              </div>
              <div className="text-5xl py-5">Instant Itineary</div>
              <div className="secol text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit blanditiis tempore quam! Quis, dolor hic eos
                commodie.
              </div>
            </div>

            <div className="pl-10">
              <div className="items-center justify-center pb-5 relative">
                <div className="rounded-full w-20 h-20 bg-trueGray-900 flex items-center justify-center">
                  <span className="text-white text-2xl">03</span>
                </div>
                <div className="w-3/4 border-t-2 border-dashed border-gray-900 absolute top-10 right-3/4"></div>
              </div>
              <div className="text-5xl py-5">Multiple Vertical</div>
              <div className="secol text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit blanditiis tempore quam! Quis, dolor hic. .
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Feature;

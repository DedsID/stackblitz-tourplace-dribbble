import React from 'react';

const Feature = () => {
  return (
    <div className="pt-40 pb-40">
      <center>
        <h1 className="text-7xl">Our Features</h1>
        <div className="pt-20 relative">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="flex lg:flex-col gap-5">
              <div className="flex flex-row relative justify-around">
                <div className="h-full w-20 lg:h-20 lg:rounded-full bg-trueGray flex items-center justify-center">
                  <span className="text-white text-2xl">01</span>
                </div>
                <div className="w-3/4 border-t-2 border-dashed border-gray-900 absolute top-10 left-3/4 hidden lg:block"></div>{' '}
                {/* menambah garis putus2 */}
              </div>
              <div className="">
                <div className="text-5xl py-5 text-left lg:text-center">
                  Dynamic Packaging
                </div>
                <div className="secol text-xl text-left lg:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit blanditiis tempore quam! Quis, dolor hict.
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col gap-5 flex-row-reverse">
              <div className="flex flex-row relative justify-around">
                <div className="h-full w-20 lg:h-20 lg:rounded-full bg-trueGray flex items-center justify-center">
                  <span className="text-white text-2xl">02</span>
                </div>
              </div>
              <div className="">
                <div className="text-5xl py-5 text-right lg:text-center">
                  Instant Itineary
                </div>
                <div className="secol text-xl text-right lg:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit blanditiis tempore quam! Quis, dolor hic eos
                  commodie.
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col gap-5">
              <div className="flex flex-row relative justify-around">
                <div className="h-full w-20 lg:h-20 lg:rounded-full bg-trueGray flex items-center justify-center">
                  <span className="text-white text-2xl">03</span>
                </div>
                <div className="w-3/4 border-t-2 border-dashed border-gray-900 absolute top-10 right-3/4 hidden lg:block"></div>{' '}
                {/* menambah garis putus2 */}
              </div>
              <div className="">
                <div className="text-5xl py-5 text-left lg:text-center">
                  Multiple Vertical
                </div>
                <div className="secol text-xl text-left lg:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit blanditiis tempore quam! Quis, dolor hic. .
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Feature;

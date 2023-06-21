import React from 'react';
import React, { useRef } from 'react';

const Popular = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Ubah angka 200 sesuai kebutuhan
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Ubah angka 200 sesuai kebutuhan
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center py-20">
        <div className="text-7xl max-w-lg">Find Popular Destination</div>
        <div className="text-6xl flex gap-5">
          <button
            id="left"
            className="rounded-full w-20 h-20 border border-black hover:bg-trueGray-900 hover:text-white flex justify-center cursor-pointer"
            onClick={scrollLeft}
          >
            {' '}
            ‹{' '}
          </button>
          <button
            id="right"
            className="rounded-full w-20 h-20 border border-black hover:bg-trueGray-900 hover:text-white flex justify-center cursor-pointer"
            onClick={scrollRight}
          >
            {' '}
            ›{' '}
          </button>
        </div>
      </div>

      {/* card */}

      <div
        id="scroll-card"
        className="scroll-card text-4xl flex flex-row gap-10 overflow-x-hidden overflow-x-auto w-screen max-width scroll-smooth "
        ref={scrollRef}
      >
        <div className="bg-white p-5 scroll-w rounded-3xl">
          <div className="h-72 bg-yellow-100 rounded-3xl"></div>
          <div className="">Westminster Bridge</div>
          <div className="text-2xl secol pt-2 pl-7">London, Uk</div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl">
              $120<span className="text-2xl secol pt-2">/Person</span>
            </div>
            <div className="text-xl bg-trueGray-900 text-white px-6 py-4 rounded-full">
              Book Now
            </div>
          </div>
        </div>
        <div className="bg-white p-5 scroll-w rounded-3xl">
          <div className="h-72 bg-blue-100 rounded-3xl"></div>
          <div className="">Sea Beach Phi Phi Island</div>
          <div className="text-2xl secol pt-2 pl-7">
            Krabi Province, Thailand
          </div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl">
              $120<span className="text-2xl secol pt-2">/Person</span>
            </div>
            <div className="text-xl bg-trueGray-900 text-white px-6 py-4 rounded-full">
              Book Now
            </div>
          </div>
        </div>
        <div className="bg-white p-5 scroll-w rounded-3xl">
          <div className="h-72 bg-red-100 rounded-3xl"></div>
          <div className="">Day City View</div>
          <div className="text-2xl secol pt-2 pl-7">China</div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl">
              $120<span className="text-2xl secol pt-2">/Person</span>
            </div>
            <div className="text-xl bg-trueGray-900 text-white px-6 py-4 rounded-full">
              Book Now
            </div>
          </div>
        </div>
        <div className="bg-white p-5 scroll-w rounded-3xl">
          <div className="h-72 bg-yellow-100 rounded-3xl"></div>
          <div className="">Lombok</div>
          <div className="text-2xl secol pt-2 pl-7">Indonesia</div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl">
              $120<span className="text-2xl secol pt-2">/Person</span>
            </div>
            <div className="text-xl bg-trueGray-900 text-white px-6 py-4 rounded-full">
              Book Now
            </div>
          </div>
        </div>
      </div>

      {/* card end */}
    </div>
  );
};

export default Popular;

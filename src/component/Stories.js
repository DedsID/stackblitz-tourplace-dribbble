import React from 'react';

const Revo = () => {
  return (
    <div className="grid 2xl:grid-cols-2 py-40 relative">
      <div className="hidden 2xl:block"></div>
      <div className="hidden 2xl:block absolute bg-white rounded-3xl pr-8 pl-36 py-6 top-60 desti">
        <div className="text-6xl pb-2 relative">
          500<span className="text-5xl absolute -top-1">+</span>
        </div>
        <div className="text-3xl">Destination</div>
      </div>
      <div className="2xl:pl-36">
        <div className="text-7xl pb-10">Our Stories Have Adventures</div>
        <div className="text-xl secol pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at
          doloremque cumque praesentium, quis modi earum, fuga incidunt aliquid
          veniam perspiciatis voluptatem, harum explicabo architecto quidem.
          Libero?
        </div>

        {/* card */}

        <div className="flex gap-5">
          <div className="2xl:hidden w-48 bg-white rounded-3xl p-8 py-12">
            <div className="text-6xl pb-4 relative">
              500<span className="text-5xl absolute -top-1">+</span>
            </div>
            <div className="text-3xl">Destination</div>
          </div>
          <div className="w-48 flex-initial bg-white rounded-3xl p-8 py-12">
            <div className="text-6xl pb-4 relative">
              12K<span className="text-5xl absolute -top-1">+</span>
            </div>
            <div className="text-3xl">Success Journey</div>
          </div>
          <div className="bg-white w-48 rounded-3xl p-8 py-12">
            <div className="text-6xl pb-4 relative">
              16<span className="text-5xl absolute -top-1">+</span>
            </div>
            <div className="text-3xl">Success Journey</div>
          </div>
          <div className="bg-white w-48 rounded-3xl p-8 py-12">
            <div className="text-6xl pb-4 relative">
              20<span className="text-5xl absolute -top-1">+</span>
            </div>
            <div className="text-3xl">Success Journey</div>
          </div>
        </div>

        {/* end card */}

      </div>
    </div>
  );
};

export default Revo;

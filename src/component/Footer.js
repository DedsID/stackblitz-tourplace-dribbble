import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="xl:w-1/3 xl:pr-28">
        <div className="text-5xl pb-5 font-bold">Tourplace</div>
        <div className="secol text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ullam
          vero! Ipsum ipsa mollitia ex voluptates. Nihil commodi quaerat
          suscipit nam! Quo in nemo sequi quod necessitatibus voluptate tempora!
          Ratione!
        </div>
      </div>
      <div className="flex-auto xl:block hidden">
        <div className="text-3xl pb-3 font-bold">Our Service</div>
        <ul>
          <li className="secol text-xl leading-loose">Our Features</li>
          <li className="secol text-xl leading-loose">Our Service</li>
          <li className="secol text-xl leading-loose">Our Stories</li>
          <li className="secol text-xl leading-loose">Popular Destination</li>
          <li className="secol text-xl leading-loose">Way Of Travel</li>
        </ul>
      </div>
      <div className="flex-auto xl:block hidden">
        <div className="text-3xl pb-3 font-bold">Company</div>
        <ul>
          <li className="secol text-xl leading-loose">About Us</li>
          <li className="secol text-xl leading-loose">Destination</li>
          <li className="secol text-xl leading-loose">Tour</li>
          <li className="secol text-xl leading-loose">Blog</li>
        </ul>
      </div>

      {/* responsive only */}

      <div className="flex xl:hidden py-10">
        <div className="flex-auto">
          <div className="text-3xl pb-3 font-bold">Our Service</div>
          <ul>
            <li className="secol text-xl leading-loose">Our Features</li>
            <li className="secol text-xl leading-loose">Our Service</li>
            <li className="secol text-xl leading-loose">Our Stories</li>
            <li className="secol text-xl leading-loose">Popular Destination</li>
            <li className="secol text-xl leading-loose">Way Of Travel</li>
          </ul>
        </div>
        <div className="flex-auto">
          <div className="text-3xl pb-3 font-bold">Company</div>
          <ul>
            <li className="secol text-xl leading-loose">About Us</li>
            <li className="secol text-xl leading-loose">Destination</li>
            <li className="secol text-xl leading-loose">Tour</li>
            <li className="secol text-xl leading-loose">Blog</li>
          </ul>
        </div>
      </div>

      {/* responsive only end */}

      <div className="flex flex-col md:flex-row xl:flex-col">
        <div>
          <div className="text-3xl font-bold">Get The Latest Information</div>
          <div className="relative md:inline-block py-5">
            <div className="flex items-center justify-between text-xl border-2 border-gray rounded-full p-2 bg-white">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Enter Your Email..."
                  className="pl-5 py-2 rounded-full text-gray-800 bg-white"
                />
              </div>
              <button className="text-xl px-5 py-2 bg-button text-gray-200 rounded-full">
                Subcribe
              </button>
            </div>
          </div>
        </div>
        <div className="md:pl-10 xl:pl-0">
          <div className="text-2xl pb-5">Join Our Social Media:</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

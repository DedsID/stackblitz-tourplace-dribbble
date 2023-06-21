import React from 'react';

const Header = () => {
  return (
    <header className="pt-10 pb-20 flex items-center justify-between">
      <div className="text-4xl font-extrabold">Tourplace</div>
      <nav>
        <ul className="flex space-x-4 font-medium text-2xl">
          <li className="md:px-5">
            <a href="#" className="hover:text-gray-200 font-bold">
              Home
            </a>
          </li>
          <li className="md:px-5">
            <a href="#" className="secol hover:text-gray-200">
              About Us
            </a>
          </li>
          <li className="md:px-5">
            <a href="#" className="secol hover:text-gray-200">
              Destination
            </a>
          </li>
          <li className="md:px-5">
            <a href="#" className="secol hover:text-gray-200">
              Tour
            </a>
          </li>
          <li className="md:px-5">
            <a href="#" className="secol hover:text-gray-200">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <a href="#" className="bg-trueGray-900 text-xl text-white px-6 py-3 rounded-full">Book Now</a>
    </header>
  );
};

export default Header;

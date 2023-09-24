import React from "react";

import menu from "../../Assets/Img/menu.svg";

const Header = () => {
  return (
    <div className='w-screen shadow-md fixed z-10 bg-white'>
      <div className='flex flex-col mx-auto max-w-6xl gap-3 py-3'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <h1 className='cursor-pointer text-2xl font-bold'>The Boiler room</h1>
            <h3 className='cursor-pointer text-xl font-semibold'>coffe & more</h3>
          </div>
          <div className=''>
            <button className='w-12 h-12 flex justify-center items-center border border-gray-300 rounded-md hover:border-orange-500 transition-colors'>
              <img src={menu} alt='menu' className='w=6 h-6' />
            </button>
          </div>
        </div>

        <nav className='font-semibold'>
          <span className='hover:text-orange-500 cursor-pointer transition-colors'>Меню</span>
          <span className='hover:text-orange-500 ml-5 cursor-pointer transition-colors'>
            Залишити відгук
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Header;

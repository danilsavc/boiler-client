import React from "react";

import menu from "../../Assets/Img/menu.svg";

const Header = () => {
  return (
    <>
      <div className='flex justify-between items-center h-28'>
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
    </>
  );
};

export default Header;

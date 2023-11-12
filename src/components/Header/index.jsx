import React from "react";

import menu from "../../Assets/Img/menu.svg";
// import ModalBar from "./ModalBar";

const Header = () => {
  // const [modalActive, setModalActive] = React.useState(true);
  return (
    <div className='w-screen shadow-md fixed z-10 bg-white p-3'>
      <div className='flex flex-col mx-auto max-w-6xl gap-3'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <h1 className='cursor-pointer text-xl lg:text-2xl font-bold'>The Boiler room</h1>
            <h3 className='cursor-pointer text-lg lg:text-xl font-semibold'>coffe & more</h3>
          </div>
          <button className='md:hidden w-12 h-12 flex justify-center items-center border rounded-md'>
            <img src={menu} alt='menu' className='w-6 h-6' />
          </button>
        </div>

        {/* <ModalBar active={modalActive} setActive={setModalActive} /> */}

        <nav className='font-semibold lg:text-base text-sm'>
          <span className='hover:text-orange-500 cursor-pointer transition'>Меню</span>
          <span className='hover:text-orange-500 ml-5 cursor-pointer transition'>
            Залишити відгук
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Header;

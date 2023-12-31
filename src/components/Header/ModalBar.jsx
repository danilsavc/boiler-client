import React from "react";

import cancel from "../../Assets/Img/cancel.svg";

const ModalBar = ({ active, setActive }) => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-neutral-800/50 z-10 grid grid-cols-6'>
      <div className='col-span-5 bg-white'></div>
      <button className='w-11 h-11 justify-self-center rounded-md bg-orange-400 flex justify-center items-center mt-4 mr-1'>
        <img src={cancel} alt='cancel' className='w-6 h-6' />
      </button>
    </div>
  );
};

export default ModalBar;

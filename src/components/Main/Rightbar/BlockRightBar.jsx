import React from "react";

const BlockRightBar = ({ img, title, text }) => {
  return (
    <div className='grid grid-cols-4 gap-y-2'>
      <div className='w-7 h-7 lg:w-12 lg:h-12 bg-gray-200 border rounded-md flex justify-center items-center'>
        <img src={img} alt='img' className='w-5 h-5 lg:w-7 lg:h-7' />
      </div>
      <div className='col-span-3'>
        <h3 className='text-h3 font-semibold text-xs lg:text-sm'>{title}</h3>
        <span className='font-bold text-xs lg:text-base'>{text}</span>
      </div>
    </div>
  );
};

export default BlockRightBar;

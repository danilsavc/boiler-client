import React from "react";

import up from "../../../../Assets/Img/up.svg";
import heart from "../../../../Assets/Img/heart.svg";

const Supplements = ({ supplements }) => {
  return (
    <>
      <button className='w-3/4 flex border border-gray-300 rounded-md px-4 py-1 items-center hover:border-orange-500 transition'>
        <img src={up} alt='up' className='w-6 h-6' />
        <span className='ml-2 text-xs'>Приховати доповнення</span>
      </button>
      <div className='w-3/4 px-3 py-2 border border-gray-300 rounded-md text-xs'>
        <h4 className='font-semibold'>Зробити смачніше</h4>
        <div className='mt-1'>
          {supplements.map((item, index) => (
            <div key={index} className='flex justify-between items-start'>
              <span className='first-letter:uppercase'>{item.name}</span>
              <span className='text-h3'>+ {item.price} UAH</span>
            </div>
          ))}
        </div>
      </div>
      <button className='w-10 h-10 border border-gray-500 rounded-md p-2 flex justify-center items-center'>
        <img className='h-5 w-5' src={heart} alt='heart' />
      </button>
    </>
  );
};

export default Supplements;

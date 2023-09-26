import React from "react";

import up from "../../../Assets/Img/up.svg";
import heart from "../../../Assets/Img/heart.svg";

const OneItem = () => {
  return (
    <div className='border-b border-gray-300 p-4 grid grid-cols-3'>
      <div className='col-span-2 grid gap-y-2'>
        <h3 className='text-xl font-bold'>Яйця Бенедикт (300г)</h3>
        <p className='text-base text-orange-500 font-bold'>220 UAH</p>
        <p className='text-sm w-3/4'>
          Булочки бріош, авокадо, лосось, яйця, соус Голандез, сезонний салат
        </p>
        <button className='w-3/4 flex border border-gray-300 rounded-md px-4 py-1 items-center hover:border-orange-500 transition'>
          <img src={up} alt='up' className='w-6 h-6' />
          <span className='ml-2 text-xs'>Приховати доповнення</span>
        </button>
        <div className='w-3/4 px-3 py-2 border border-gray-300 rounded-md text-xs'>
          <h4 className='font-semibold'>Зробити смачніше</h4>
          <div className='mt-1'>
            <div className='flex justify-between items-start'>
              <span>Індичка (50г)</span>
              <span className='text-h3'>+ 50 UAH</span>
            </div>
          </div>
        </div>
        <button className='w-10 h-10 border border-gray-500 rounded-md p-2 flex justify-center items-center'>
          <img className='h-5 w-5' src={heart} alt='heart' />
        </button>
      </div>
      <div className='justify-self-center'>
        <img src='https://picsum.photos/seed/picsum/200/300' alt='' className='w-40 h-32' />
      </div>
    </div>
  );
};

export default OneItem;

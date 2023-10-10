import React from "react";

import instagram from "../../Assets/Img/instagram.svg";

const LeftFooter = () => {
  return (
    <div className='grid md:grid-cols-2 gap-x-2'>
      <div className='mb-6'>
        <h3 className='font-bold mb-3'>Контактні дані</h3>
        <div className='grid gap-3'>
          <p className='text-sm'>проспект Соборний, 212, Запоріжжя, Zaporizhia Oblast, Ukraine</p>
          <a className='text-sm' href='tel:+380682234332'>
            380682234332
          </a>
          <a className='text-sm' href='mailto:theboilerroom@gmail.com'>
            theboilerroom@gmail.com
          </a>
        </div>
        <h3 className='font-bold my-3'>Робочий час</h3>
        <p className='text-sm'>8:00 - 21:00</p>
      </div>
      <div>
        <h3 className='font-bold mb-3'>Ми в соцмережах</h3>
        <a
          href='https://www.instagram.com/the.boiler.room.zp/'
          className='flex items-center gap-x-2'
        >
          <img src={instagram} alt='instagram' className='w-5 h-5' />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default LeftFooter;

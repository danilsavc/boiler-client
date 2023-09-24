import React from "react";
import Map from "../Map";

import track from "../../Assets/Img/track.svg";

const RightFooter = () => {
  return (
    <div className='grid gap-3'>
      <h3 className='font-bold'>На карті</h3>
      <Map />
      <a href='https://maps.google.com/?q=проспект Соборний, 212, Запоріжжя, Zaporizhia Oblast, Ukraine'>
        <button className='w-1/2 border border-gray-300 flex items-center gap-x-2 py-2 rounded-md justify-center transition hover:border-orange-500'>
          <img src={track} alt='track' className='w-8 h-8' />
          <span className='font-bold'>Отримати розташування</span>
        </button>
      </a>
    </div>
  );
};

export default RightFooter;

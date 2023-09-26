import React from "react";
import Map from "../Map";

import track from "../../Assets/Img/track.svg";

const RightFooter = () => {
  return (
    <div className='grid gap-3'>
      <h3 className='font-bold'>На карті</h3>
      <Map />
      <a href='https://maps.google.com/?q=проспект Соборний, 212, Запоріжжя, Zaporizhia Oblast, Ukraine'>
        <button className='w-full lg:w-1/2 border border-gray-300 grid grid-cols-3 lg:grid-cols-4 items-center gap-x-2 py-2 rounded-md transition hover:border-orange-500'>
          <img
            src={track}
            alt='track'
            className='w-8 h-8 justify-self-end lg:justify-self-center'
          />
          <span className='text-sm lg:text-base font-bold col-span-2 lg:col-span-3 justify-self-start lg:justify-self-center'>
            Отримати розташування
          </span>
        </button>
      </a>
    </div>
  );
};

export default RightFooter;

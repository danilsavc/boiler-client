import React from "react";

import Supplements from "./Supplements";

const OneItem = ({ name, price, description, supplements, img }) => {
  return (
    <div className='border-b border-gray-300 p-2 grid grid-cols-3 last:border-b-0'>
      <div className='col-span-2 grid gap-y-2'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p className='text-base text-orange-500 font-bold'>{price} UAH</p>
        <p className='text-sm w-3/4'>{description}</p>
        <Supplements supplements={supplements} />
      </div>
      <div className='justify-self-center'>
        <img
          src={process.env.REACT_APP_API_URL + img}
          alt=''
          className='w-40 h-32 object-cover rounded-md'
        />
      </div>
    </div>
  );
};

export default OneItem;

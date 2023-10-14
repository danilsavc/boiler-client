import React from "react";
import OneItem from "./OneItem";

const Center = () => {
  return (
    <main className='grid grid-cols-1 gap-4 px-2 pt-3 lg:pr-0'>
      <h1 className='text-2xl font-bold'>Сніданки All Day</h1>
      {/* Загальний блок для всіх страв */}
      <div className='border border-gray-300 rounded-md flex flex-col justify-center'>
        {/* Блок для однієї страви */}
        <OneItem />
        <OneItem />
        <OneItem />
      </div>
    </main>
  );
};

export default Center;

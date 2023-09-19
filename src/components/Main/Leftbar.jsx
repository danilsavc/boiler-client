import React from "react";

const textClasses =
  "cursor-pointer font-bold hover:text-orange-500 transition-colors active:underline";

const Leftbar = () => {
  return (
    <div className='m-3'>
      <h3 className='font-semibold text-h3'>Меню:</h3>
      <nav className='flex flex-col space-y-4 mt-3 text-s'>
        <span className={textClasses}>Сніданки All Day</span>
        <span className={textClasses}>Кава з молоком</span>
        <span className={textClasses}>Чорна кава</span>
        <span className={textClasses}>Холодна кава</span>
        <span className={textClasses}>Напої</span>
        <span className={textClasses}>Солодощі</span>
      </nav>
    </div>
  );
};

export default Leftbar;

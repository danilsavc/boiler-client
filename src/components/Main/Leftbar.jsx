import React from "react";

const titleCategory = [
  "Сніданки All Day",
  "Кава з молоком",
  "Чорна кава",
  "Холодна кава",
  "Напої",
  "Солодощі",
];

const textClasses =
  "cursor-pointer font-bold hover:text-orange-500 transition-colors active:underline";

const Leftbar = () => {
  return (
    <aside className='p-3 bg-white'>
      <h3 className='font-semibold text-h3 text-sm lg:text-base'>Меню:</h3>
      <nav className='flex flex-col space-y-4 mt-3 text-xs lg:text-sm'>
        {titleCategory.map((index, key) => (
          <div key={key}>
            <span className={textClasses}>{index}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Leftbar;

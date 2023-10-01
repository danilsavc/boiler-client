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

const Category = () => {
  return (
    <aside className='p-3 bg-white'>
      <nav className='flex text-xl lg:text-2xl gap-x-4 w-full overflow-auto whitespace-nowrap'>
        {titleCategory.map((index, key) => (
          <div key={key}>
            <span className={textClasses}>{index}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Category;

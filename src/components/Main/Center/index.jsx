import React from "react";
import { useDispatch, useSelector } from "react-redux";

import OneItem from "./OneItem/index";
import { fetchDish } from "../../../Redux/slices/dish";

const Center = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.dish);
  const isLoading = status === "loading";

  React.useEffect(() => {
    dispatch(fetchDish());
  }, [dispatch]);

  return (
    <main className='grid grid-cols-1 gap-4 px-2 pt-3 lg:pr-0'>
      <h1 className='text-2xl font-bold'>Сніданки All Day</h1>
      {/* Загальний блок для всіх страв */}
      <div className='border border-gray-300 rounded-md flex flex-col justify-center'>
        {/* Блок для однієї страви */}

        {isLoading ? (
          <span>Loading...</span>
        ) : (
          items.dish.map((item, index) => (
            <div key={index}>
              <OneItem
                name={item.name}
                description={item.description}
                price={item.price}
                supplements={item.dishSupplement}
                img={item.imgUrl}
              />
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Center;

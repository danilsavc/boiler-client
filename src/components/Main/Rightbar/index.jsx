import React from "react";

import BlockRightBar from "./BlockRightBar";

import clock from "../../../Assets/Img/clock.svg";
import telephone from "../../../Assets/Img/telephone.svg";
import address from "../../../Assets/Img/address.svg";
import message from "../../../Assets/Img/message.svg";

const block = [
  {
    img: clock,
    title: "Робочий час",
    text: "8:00-21:00",
  },
  {
    img: address,
    title: "Адреса:",
    text: "проспект Соборний, 212",
  },
  {
    img: telephone,
    title: "Телефон",
    text: "+380682234332",
  },
];

const Rightbar = () => {
  return (
    <div className='m-3 flex flex-col gap-3'>
      <h3 className='text-h3 font-semibold'>Інформація про заклад</h3>
      <div className='flex flex-col gap-3'>
        {block.map((index, key) => (
          <div key={key}>
            <BlockRightBar img={index.img} title={index.title} text={index.text} />
          </div>
        ))}
      </div>
      <button className='h-12 border rounded-md flex justify-center items-center gap-3 cursor-pointer hover:border-orange-500 transition-colors'>
        <img src={message} alt='message' className='h-6 w-6' />
        <span className='font-bold'>Надіслати відгук</span>
      </button>
    </div>
  );
};

export default Rightbar;

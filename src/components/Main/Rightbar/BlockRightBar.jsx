import React from "react";

const imgBlock = "w-12 h-12 bg-gray-200 border rounded-md flex justify-center items-center";
const imgSize = "w-7 h-7";
const h3 = "text-h3 font-semibold";

const BlockRightBar = ({ img, title, text }) => {
  return (
    <div className='flex gap-2'>
      <div className={imgBlock}>
        <img src={img} alt='img' className={imgSize} />
      </div>
      <div>
        <h3 className={`${h3} text-sm`}>{title}</h3>
        <span className='font-bold'>{text}</span>
      </div>
    </div>
  );
};

export default BlockRightBar;

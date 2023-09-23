import React from "react";
import Leftbar from "./Leftbar";
import Center from "./Center";
import Rightbar from "./Rightbar";

const Main = () => {
  return (
    <>
      <img src='https://picsum.photos/seed/picsum/200/300' alt='' className='w-full h-96' />
      <div className='flex items-start '>
        <div className='w-1/4'>
          <Leftbar />
        </div>
        <div className='w-1/2 '>
          <Center />
        </div>
        <div className='w-1/4 '>
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default Main;
